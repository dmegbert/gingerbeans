import pulumi

config = pulumi.Config()

# Project
env = config.require("env")
service_name = pulumi.get_project()
prefix = f"{env}-{service_name}"

# UI
static_site_path = "../gb-ui/build"
certificate_arn = config.require("certificate_arn")  # TBD
