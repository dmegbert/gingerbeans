from aws_cdk import aws_route53 as route53

from infra.infra_stack import InfraStack


def create_hosted_zone(scope: InfraStack) -> route53.HostedZone:
    domain = "gingerbeans.tech"
    return route53.HostedZone(
        scope,
        id=domain,
        vpcs=None,
        comment=None,
        query_logs_log_group_arn=None,
        zone_name=domain,
    )
