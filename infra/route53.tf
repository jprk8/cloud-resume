data "aws_route53_zone" "prod_zone" {
  name = "johnjpark.com"
  private_zone = false
}

# A record for root domain
resource "aws_route53_record" "root_alias" {
  zone_id = data.aws_route53_zone.prod_zone.zone_id
  name = "johnjpark.com"
  type = "A"
  
  alias {
    name = aws_cloudfront_distribution.cloudfront_distribution.domain_name
    zone_id = aws_cloudfront_distribution.cloudfront_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

# A record for www subdomain
resource "aws_route53_record" "www_alias" {
  zone_id = data.aws_route53_zone.prod_zone.zone_id
  name = "www.johnjpark.com"
  type = "A"
  
  alias {
    name = aws_cloudfront_distribution.cloudfront_distribution.domain_name
    zone_id = aws_cloudfront_distribution.cloudfront_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}