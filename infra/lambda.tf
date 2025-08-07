# Package my lambda function code
data "archive_file" "zip_lambda" {
  type        = "zip"
  source_file = "${path.module}/lambda_function.py"
  output_path = "${path.module}/lambda_function.zip"
}

# Create lambda function
resource "aws_lambda_function" "my_lambda" {
  function_name    = "views_lambda"
  handler          = "lambda_function.lambda_handler"
  runtime          = "python3.12"
  role             = aws_iam_role.lambda_role.arn
  filename         = data.archive_file.zip_lambda.output_path
  source_code_hash = data.archive_file.zip_lambda.output_base64sha256

  environment {
    variables = {
      TABLE_NAME = aws_dynamodb_table.views_table.name
    }
  }
}

# IAM role for lambda
resource "aws_iam_role" "lambda_role" {
  name = "lambda_dynamodb_role"

  assume_role_policy = <<EOF
{
"Version": "2012-10-17",
"Statement": [{
    "Action": "sts:AssumeRole",
    "Principal": {
        "Service": "lambda.amazonaws.com"
    },
    "Effect": "Allow"
}]
}
EOF
}

# Create IAM policy and attach to lambda_role
resource "aws_iam_policy" "lambda_dynamodb_policy" {
  name        = "lambda_dynamodb_policy"
  description = "Policy to allow Lambda to access DynamoDB and CloudWatch Logs"
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Action = [
          "dynamodb:GetItem",
          "dynamodb:UpdateItem",
          "dynamodb:PutItem"
        ],
        Resource = aws_dynamodb_table.views_table.arn
      },
      {
        Effect = "Allow",
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ],
        Resource = "arn:aws:logs:*:*:*"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_policy_attachment" {
  role       = aws_iam_role.lambda_role.name
  policy_arn = aws_iam_policy.lambda_dynamodb_policy.arn
}

# Create a Lambda Function URL to expose the function via HTTP
resource "aws_lambda_function_url" "my_lambda_url" {
  function_name      = aws_lambda_function.my_lambda.function_name
  authorization_type = "NONE" # Public endpoint

  cors {
    allow_origins = ["https://johnjpark.com", "https://www.johnjpark.com"]
    allow_methods = ["GET"]
    allow_headers = ["*"]
    max_age       = 86400
  }
}
