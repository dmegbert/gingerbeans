from aws_cdk import (
    aws_route53 as route53,
    Duration,
)

from infra.infra_stack import InfraStack


def create_mx_records(scope: InfraStack, hosted_zone: route53.HostedZone):
    route53.MxRecord(
        scope,
        scope.context.construct_id("MX-Gmail-1"),
        values=[
            route53.MxRecordValue(host_name='ASPMX.L.GOOGLE.COM', priority=1),
            route53.MxRecordValue(host_name='ALT1.ASPMX.L.GOOGLE.COM', priority=5),
            route53.MxRecordValue(host_name='ALT2.ASPMX.L.GOOGLE.COM', priority=5),
            route53.MxRecordValue(host_name='ALT3.ASPMX.L.GOOGLE.COM', priority=10),
            route53.MxRecordValue(host_name='ALT4.ASPMX.L.GOOGLE.COM', priority=10),
        ],
        zone=hosted_zone,
        ttl=Duration.seconds(3600),
    )
