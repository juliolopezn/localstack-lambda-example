# localstack-lambda-example
Kick start AWS Lambda function with Localstack 

## Run LocalStack docker container

`docker-compose up`

## Install aws-cli

https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

## Create IAM access

`aws --endpoint-url=http://localhost:4566 iam create-role --role-name lambda-example --assume-role-policy-document ./trust-policy.json`

## Create Lambda function

`aws --endpoint-url=http://localhost:4566 lambda create-function --function-name myfirstlambda --zip-file fileb://index.zip --handler index.handler --runtime nodejs14.x --role arn:aws:iam::000000000000:role/lambda-example`

## Run yout Lambda 

`aws --endpoint-url=http://localhost:4566 lambda invoke --function-name myfirstlambda out --log-type Tail --query 'LogResult' --output text`