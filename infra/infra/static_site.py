from aws_cdk import Duration, RemovalPolicy
from aws_cdk import aws_route53 as route53
from aws_cdk import aws_route53_targets as targets
from aws_cdk import aws_certificatemanager as acm
from aws_cdk import aws_cloudfront as cloudfront
from aws_cdk import aws_cloudfront_origins as origins
from aws_cdk import aws_s3 as s3
from aws_cdk import aws_iam as iam
from aws_cdk import aws_s3_deployment as s3_deployment

from infra.constants import PRODUCTION
from infra.infra_stack import InfraStack


def create_static_site(scope: InfraStack, hosted_zone: route53.HostedZone):
    bucket = s3.Bucket(
        scope,
        id=scope.context.construct_id("s3"),
        bucket_name=f'{scope.context.construct_id("s3")}-bucket',
        versioned=True,
        block_public_access=s3.BlockPublicAccess(
            restrict_public_buckets=True,
            block_public_policy=True,
            block_public_acls=True,
        ),
        removal_policy=RemovalPolicy.RETAIN,
        auto_delete_objects=False,
        lifecycle_rules=[
            s3.LifecycleRule(noncurrent_version_expiration=Duration.days(7))
        ],
    )

    prod_domain_name = "gingerbeans.tech"
    lower_domain_name = f"{scope.context.env_name}.gingerbeans.tech"
    domain_name = (
        prod_domain_name
        if scope.context.env_name == PRODUCTION
        else lower_domain_name
    )

    my_certificate = acm.DnsValidatedCertificate(
        scope,
        scope.context.construct_id("certificate"),
        domain_name=domain_name,
        hosted_zone=hosted_zone,
        region="us-east-1",
    )

    origin_access_identity = cloudfront.OriginAccessIdentity(
        scope, scope.context.construct_id("cfOriginAccessIdentity")
    )
    cf_s3_access = iam.PolicyStatement()
    cf_s3_access.add_actions("s3:GetBucket*")
    cf_s3_access.add_actions("s3:GetObject*")
    cf_s3_access.add_actions("s3:List*")
    cf_s3_access.add_resources(bucket.bucket_arn)
    cf_s3_access.add_resources(f"{bucket.bucket_arn}/*")
    cf_s3_access.add_canonical_user_principal(
        origin_access_identity.cloud_front_origin_access_identity_s3_canonical_user_id
    )
    bucket.add_to_resource_policy(cf_s3_access)

    distro = cloudfront.Distribution(
        scope,
        scope.context.construct_id("dist"),
        default_behavior=cloudfront.BehaviorOptions(
            origin=origins.S3Origin(
                bucket=bucket, origin_access_identity=origin_access_identity
            )
        ),
        default_root_object="index.html",
        domain_names=[domain_name],
        certificate=my_certificate,
    )

    route53.AaaaRecord(
        scope,
        scope.context.construct_id("AAAA"),
        record_name=domain_name,
        target=route53.RecordTarget.from_alias(targets.CloudFrontTarget(distro)),
        zone=hosted_zone,
    )

    route53.ARecord(
        scope,
        scope.context.construct_id("A"),
        record_name=domain_name,
        target=route53.RecordTarget.from_alias(targets.CloudFrontTarget(distro)),
        zone=hosted_zone,
    )

    s3_deployment.BucketDeployment(
        scope,
        scope.context.construct_id("s3_deployment"),
        sources=[s3_deployment.Source.asset("../gb-ui/build")],
        destination_key_prefix="/",
        destination_bucket=bucket,
        distribution=distro,
        distribution_paths=["/*"],
    )
