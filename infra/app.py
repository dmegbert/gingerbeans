#!/usr/bin/env python3
import aws_cdk as cdk

from infra import Context
from infra.infra_stack import InfraStack
from infra.static_site import create_static_site
from infra.r53_hosted_zone import create_hosted_zone

app = cdk.App()


context = Context(app=app)

stack = InfraStack(
    app,
    f"{context.env_name}-{context.service_name}",
    env=cdk.Environment(account=context.account_id, region=context.aws_region),
    context=context,
)

r53_zone_stack = InfraStack(
    app,
    f'{context.service_name}-hosted-zone-stack',
    env=cdk.Environment(account=context.account_id, region=context.aws_region),
    context=context,
)

zone = create_hosted_zone(r53_zone_stack)

create_static_site(stack, zone)

app.synth()
