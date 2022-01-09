from aws_cdk import (
    aws_route53 as route53,
    Duration,
)

from infra.infra_stack import InfraStack


def create_hosted_zone(scope: InfraStack) -> route53.HostedZone:
    domain = scope.context.domain_name
    hosted_zone = route53.HostedZone(
        scope,
        id=domain,
        vpcs=None,
        comment=None,
        query_logs_log_group_arn=None,
        zone_name=domain,
    )

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

    return hosted_zone
