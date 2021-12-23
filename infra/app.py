#!/usr/bin/env python3
import aws_cdk as cdk

from infra import Context
from infra.infra_stack import InfraStack
from infra.s3 import create_s3_bucket

app = cdk.App()


context = Context(app=app)

stack = InfraStack(
    app,
    f"{context.env_name}-{context.service_name}",
    env=cdk.Environment(account=context.account_id, region=context.aws_region),
    context=context,
)

create_s3_bucket(stack)

app.synth()
