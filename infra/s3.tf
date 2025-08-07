# Create s3 bucket
resource "aws_s3_bucket" "website_bucket" {
  bucket = var.bucket_name
}

# Upload index.html
resource "aws_s3_object" "index_html" {
  bucket       = aws_s3_bucket.website_bucket.id
  key          = "index.html"
  source       = "${path.module}/dist/index.html"
  etag         = filemd5("${path.module}/dist/index.html")
  content_type = "text/html"

  lifecycle {
    ignore_changes = [
      etag,
      source,
    ]
  }
}

# Upload all files from dist/assets/ dynamically
# resource "aws_s3_object" "assets" {
#   for_each = fileset("${path.module}/dist/assets", "*")

#   bucket = aws_s3_bucket.website_bucket.id
#   key    = "assets/${each.value}"
#   source = "${path.module}/dist/assets/${each.value}"
#   etag   = filemd5("${path.module}/dist/assets/${each.value}")
#   content_type = lookup({
#     "html"  = "text/html",
#     "css"   = "text/css",
#     "js"    = "application/javascript",
#     "png"   = "image/png",
#     "jpg"   = "image/jpeg",
#     "jpeg"  = "image/jpeg",
#     "svg"   = "image/svg+xml",
#     "woff"  = "font/woff",
#     "woff2" = "font/woff2",
#     "ttf"   = "font/ttf"
#   }, split(".", each.value)[length(split(".", each.value)) - 1], "application/octet-stream")

#   lifecycle {
#     ignore_changes = [
#       etag,
#       source,
#     ]
#   }
# }

# Bucket policy for when using OAC
resource "aws_s3_bucket_policy" "s3_bucket_policy" {
  bucket = aws_s3_bucket.website_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "AllowCloudFrontServicePrincipalReadOnly"
        Effect = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.website_bucket.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn"     = aws_cloudfront_distribution.cloudfront_distribution.arn
            "AWS:SourceAccount" = "${data.aws_caller_identity.current.account_id}"
          }
        }
      }
    ]
  })
}

data "aws_caller_identity" "current" {}
