import os
import json
import boto3

dynamodb = boto3.resource('dynamodb')
table_name = os.environ.get('TABLE_NAME', 'views_table')
table = dynamodb.Table(table_name)
def lambda_handler(event, context):
    response = table.get_item(Key={
        'id': '0'
    })
    views = response['Item']['views']
    views = views + 1
    print(views)
    response = table.put_item(Item={
        'id': '0',
        'views': views
    })

    return views