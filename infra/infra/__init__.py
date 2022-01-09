import aws_cdk as cdk


class Context:
    def __init__(self, app: cdk.App):
        self.account_id = app.node.try_get_context("AWS_ACCOUNT_ID")
        self.aws_region = app.node.try_get_context("AWS_REGION")
        self.env_name = app.node.try_get_context("ENV_NAME")
        self.service_name = app.node.try_get_context("SERVICE_NAME")
        self.domain_name = app.node.try_get_context("DOMAIN_NAME")

    def construct_id(self, construct_name):
        return f"{construct_name}-{self.env_name}-{self.service_name}"
