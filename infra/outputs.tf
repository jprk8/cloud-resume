output "cloudfront_domain_name" {
  value = aws_cloudfront_distribution.cloudfront_distribution.domain_name
}

output "lambda_function_url" {
  value = aws_lambda_function_url.my_lambda_url.function_url
}