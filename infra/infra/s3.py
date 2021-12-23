from aws_cdk import aws_s3 as s3

from infra.infra_stack import InfraStack


def create_s3_bucket(scope: InfraStack):
    s3.Bucket(
        scope,
        id=scope.context.construct_id("s3"),
        bucket_name=f'{scope.context.construct_id("s3")}-bucket',
    )
