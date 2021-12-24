ENV_NAME ?= sandbox
SERVICE_NAME = gingerbeans
AWS = aws
AWS_ACCOUNT_ID = $(shell $(AWS) sts get-caller-identity --output text --query 'Account')
SYNTH_OUT ?= cdk.out
AWS_REGION = us-east-2
CDK_USER_ARN = arn:aws:iam::$(AWS_ACCOUNT_ID):user/cdkAdmin

deploy:
	cdk deploy --all \
	--output=$(SYNTH_OUT) \
	--context ENV_NAME=${ENV_NAME} \
	--context SERVICE_NAME=$(SERVICE_NAME) \
	--context AWS_ACCOUNT_ID=$(AWS_ACCOUNT_ID) \
	--context AWS_REGION=$(AWS_REGION) \
	--require-approval never

synth:
	cdk synth \
	--output=$(SYNTH_OUT) \
	--context ENV_NAME=${ENV_NAME} \
	--context SERVICE_NAME=$(SERVICE_NAME) \
	--context AWS_ACCOUNT_ID=$(AWS_ACCOUNT_ID) \
	--context AWS_REGION=$(AWS_REGION)

diff:
	cdk diff \
	--output=$(SYNTH_OUT) \
	--context ENV_NAME=${ENV_NAME} \
	--context SERVICE_NAME=$(SERVICE_NAME) \
	--context AWS_ACCOUNT_ID=$(AWS_ACCOUNT_ID) \
	--context AWS_REGION=$(AWS_REGION)

destroy:
	cdk destroy \
	--output=$(SYNTH_OUT) \
	--context ENV_NAME=${ENV_NAME} \
	--context SERVICE_NAME=$(SERVICE_NAME) \
	--context AWS_ACCOUNT_ID=$(AWS_ACCOUNT_ID) \
	--context AWS_REGION=$(AWS_REGION)
