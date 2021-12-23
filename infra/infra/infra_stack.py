from aws_cdk import Stack
from constructs import Construct

from infra import Context


class InfraStack(Stack):
    def __init__(
        self, scope: Construct, construct_id: str, context: Context, **kwargs
    ) -> None:
        super().__init__(scope, construct_id, **kwargs)
        self.context = context
