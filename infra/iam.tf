# Create OIDC for GitHub
resource "aws_iam_openid_connect_provider" "github" {
  url             = "https://token.actions.githubusercontent.com"
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = ["ffffffffffffffffffffffffffffffffffffffff"]
}

# IAM role for GitHub Actions
resource "aws_iam_role" "github_deploy_role" {
  name = "GitHubDeployRole"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Principal = {
        Federated = aws_iam_openid_connect_provider.github.arn
      }
      Action = "sts:AssumeRoleWithWebIdentity"
      Condition = {
        StringEquals = {
          "token.actions.githubusercontent.com:aud" = "sts.amazonaws.com"
        }
        StringLike = {
          "token.actions.githubusercontent.com:sub" = "repo:jprk8/cloud-resume:*"
        }
      }
    }]
  })
}

# IAM policy for S3 and Cloudfront
resource "aws_iam_policy" "github_deploy_policy" {
  name        = "GitHubDeployPolicy"
  description = "Policy to allow GitHub Actions to deploy to S3 and invalidate CloudFront"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      # Allow uploading & deleting objects in the specific S3 bucket
      {
        Effect   = "Allow"
        Action   = ["s3:PutObject", "s3:DeleteObject"]
        Resource = "arn:aws:s3:::${aws_s3_bucket.website_bucket.bucket}/*"
      },
      # Allow listing the bucket
      {
        Effect   = "Allow"
        Action   = ["s3:ListBucket"]
        Resource = "arn:aws:s3:::${aws_s3_bucket.website_bucket.bucket}"
      },
      # Allow creating invalidations on the specified CloudFront distribution
      {
        Effect   = "Allow"
        Action   = ["cloudfront:CreateInvalidation"]
        Resource = "arn:aws:cloudfront::${data.aws_caller_identity.current.account_id}:distribution/${aws_cloudfront_distribution.cloudfront_distribution.id}"
      }
    ]
  })
}

# Attach policy to GitHub role
resource "aws_iam_role_policy_attachment" "github_deploy_attach" {
  role       = aws_iam_role.github_deploy_role.name
  policy_arn = aws_iam_policy.github_deploy_policy.arn
}
