# Create DynamoDB table with 'id' as primary key
resource "aws_dynamodb_table" "views_table" {
  name = "views_table"
  billing_mode = "PAY_PER_REQUEST"
  hash_key = "id"

  attribute {
    name = "id"
    type = "S"
  }
}

# Initialize the table with item id: 0, views: 0
resource "aws_dynamodb_table_item" "init_item" {
  table_name = aws_dynamodb_table.views_table.name
  hash_key = aws_dynamodb_table.views_table.hash_key
  item = jsonencode({
    id = { S = "0" }
    views = { N = "0" }
  })

  lifecycle {
    ignore_changes = [ item ]
  }
}