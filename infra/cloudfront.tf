# Create OAC for cloudfront
resource "aws_cloudfront_origin_access_control" "oac" {
  name                              = "cloud-resume-s3-oac"
  description                       = "OAC for S3"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# Create cloudfront distribution
resource "aws_cloudfront_distribution" "cloudfront_distribution" {
  origin {
    domain_name              = aws_s3_bucket.website_bucket.bucket_regional_domain_name
    origin_id                = "myS3Origin"
    origin_access_control_id = aws_cloudfront_origin_access_control.oac.id
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  # Adding alias for alternate domain name
  aliases = [
    "johnjpark.com",
    "www.johnjpark.com"
  ]

  default_cache_behavior {
    target_origin_id       = "myS3Origin"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    min_ttl                = 0
    default_ttl            = 86400
    max_ttl                = 86400

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  # Use ACM certificate for custom domain name
  viewer_certificate {
    cloudfront_default_certificate = false
    acm_certificate_arn            = "arn:aws:acm:us-east-1:713881828008:certificate/f0cc82b9-41da-4e4c-bf3e-51b666bb0919"
    ssl_support_method             = "sni-only"
    minimum_protocol_version       = "TLSv1.2_2019"
  }
}
