import mimetypes
import os

from pulumi import FileAsset, ResourceOptions
import pulumi_aws as aws

from constants import certificate_arn, env, prefix, static_site_path

# TODO Apply to production - create stack, etc.

def get_web_contents_root_path():
    # TODO Update for circleci -- if cwd.startswith("/home/circleci"):
    cwd = os.getcwd()
    # root_dir = cwd.replace("infrastructure", "frontend")
    # return f"{root_dir}/build"
    return os.path.join(os.getcwd(), static_site_path)


def crawl_static_dir(static_dir, f):
    for file in os.listdir(static_dir):
        filepath = os.path.join(static_dir, file)

        if os.path.isdir(filepath):
            crawl_static_dir(filepath, f)
        elif os.path.isfile(filepath):
            f(filepath)


def create_static_site() -> dict:
    static_bucket = aws.s3.Bucket(
        f"{prefix}-bucket",
        bucket=f"{prefix}-bucket",
        hosted_zone_id="Z2O1EMRO9K5GLX",
        lifecycle_rules=[aws.s3.BucketLifecycleRuleArgs(
            enabled=True,
            id="ZmJiMjViZTItY2IzMS00N2QyLThjZDYtNDJjNTg0MWU0ODJj",
            noncurrent_version_expiration=aws.s3.BucketLifecycleRuleNoncurrentVersionExpirationArgs(
                days=7,
            ),
        )],
        request_payer="BucketOwner",
        server_side_encryption_configuration=aws.s3.BucketServerSideEncryptionConfigurationArgs(
            rule=aws.s3.BucketServerSideEncryptionConfigurationRuleArgs(
                apply_server_side_encryption_by_default=aws.s3.BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultArgs(
                    sse_algorithm="AES256",
                ),
            ),
        ),
        versioning=aws.s3.BucketVersioningArgs(
            enabled=True,
        )
    )

    def bucket_object_converter(filepath):
        """
        Takes a file path and returns a bucket object managed by Pulumi
        """
        web_contents_root_path = get_web_contents_root_path()
        relative_path = filepath.replace(web_contents_root_path + "/", "")
        # Determine the mimetype using the `mimetypes` module.
        mime_type, _ = mimetypes.guess_type(filepath)
        aws.s3.BucketObject(
            relative_path,
            key=relative_path,
            acl="public-read",
            bucket=static_bucket.id,
            content_type=mime_type,
            source=FileAsset(filepath),
            opts=ResourceOptions(parent=static_bucket),
        )
    static_web_contents_root_path = get_web_contents_root_path()
    crawl_static_dir(static_web_contents_root_path, bucket_object_converter)

    alias = "gingerbeans.tech" if env == "production" else f"{env}.gingerbeans.tech"
    s3_origin_id = f"{prefix}-s3-origin-id"
    origin_access_control = aws.cloudfront.OriginAccessControl(
        f"{prefix}-origin-access-control",
        description="S3 Bucket Policy",
        origin_access_control_origin_type="s3",
        signing_behavior="always",
        signing_protocol="sigv4"
    )
    hosted_zone = aws.route53.get_zone(name="gingerbeans.tech")
    hosted_zone_id = hosted_zone.zone_id

    distribution = aws.cloudfront.Distribution(
        f"{prefix}-distribution",
        aliases=[alias],
        default_cache_behavior=aws.cloudfront.DistributionDefaultCacheBehaviorArgs(
            allowed_methods=[
                "DELETE",
                "GET",
                "HEAD",
                "OPTIONS",
                "PATCH",
                "POST",
                "PUT",
            ],
            cached_methods=[
                "GET",
                "HEAD",
            ],
            target_origin_id=s3_origin_id,
            forwarded_values=aws.cloudfront.DistributionDefaultCacheBehaviorForwardedValuesArgs(
                query_string=False,
                cookies=aws.cloudfront.DistributionDefaultCacheBehaviorForwardedValuesCookiesArgs(
                    forward="none",
                ),
            ),
            viewer_protocol_policy="allow-all",
            min_ttl=0,
            default_ttl=3600,
            max_ttl=86400,
        ),
        default_root_object="index.html",
        enabled=True,
        is_ipv6_enabled=True,
        origins=[aws.cloudfront.DistributionOriginArgs(
            domain_name=f"{prefix}-bucket.s3.us-east-2.amazonaws.com",
            origin_id=s3_origin_id,
            origin_access_control_id=origin_access_control.id,
            # s3_origin_config=aws.cloudfront.DistributionOriginS3OriginConfigArgs(
                # origin_access_identity=origin_access.cloudfront_access_identity_path,
            # ),
        )],
        restrictions=aws.cloudfront.DistributionRestrictionsArgs(
            geo_restriction=aws.cloudfront.DistributionRestrictionsGeoRestrictionArgs(
               restriction_type="none",
            ),
        ),
        viewer_certificate=aws.cloudfront.DistributionViewerCertificateArgs(
            acm_certificate_arn=certificate_arn,
            minimum_protocol_version="TLSv1.2_2021",
            ssl_support_method="sni-only",
        )
    )

    alias_a_record = aws.route53.Record(
        f"{env}-a-record",
        name=alias,
        zone_id=hosted_zone_id,
        type="A",
        aliases=[
            aws.route53.RecordAliasArgs(
                name=distribution.domain_name,
                zone_id=distribution.hosted_zone_id,
                evaluate_target_health=True,
            )
        ],
    )

    alias_aaaa_record = aws.route53.Record(
        f"{env}-aaaa-record",
        name=alias,
        zone_id=hosted_zone_id,
        type="AAAA",
        aliases=[
            aws.route53.RecordAliasArgs(
                name=distribution.domain_name,
                zone_id=distribution.hosted_zone_id,
                evaluate_target_health=True,
            )
        ],
    )

    resource_dict = {
        "s3": static_bucket,
        "cf": distribution,
        "r53_a": alias_a_record,
        "r53_aaaa": alias_aaaa_record,
    }

    return resource_dict
