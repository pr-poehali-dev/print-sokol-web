import json
import os
import urllib.request
import urllib.parse
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Send order request to VK chat
    Args: event with httpMethod, body containing order details
          context with request_id
    Returns: HTTP response with success/error status
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    vk_token = os.environ.get('VK_BOT_TOKEN')
    vk_chat_id = os.environ.get('VK_CHAT_ID')
    
    if not vk_token or not vk_chat_id:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'VK credentials not configured'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    name = body_data.get('name', 'Не указано')
    phone = body_data.get('phone', 'Не указан')
    email = body_data.get('email', 'Не указана')
    comment = body_data.get('comment', 'Нет комментария')
    product = body_data.get('product', 'Не указан')
    
    message = f"""🎨 Новая заявка с сайта ПринтСОКОЛ

👤 Имя: {name}
📱 Телефон: {phone}
📧 Email: {email}
🛍️ Товар: {product}
💬 Комментарий: {comment}"""
    
    vk_api_url = 'https://api.vk.com/method/messages.send'
    params = {
        'access_token': vk_token,
        'v': '5.131',
        'peer_id': vk_chat_id,
        'message': message,
        'random_id': 0
    }
    
    data = urllib.parse.urlencode(params).encode('utf-8')
    req = urllib.request.Request(vk_api_url, data=data)
    
    try:
        with urllib.request.urlopen(req) as response:
            result = json.loads(response.read().decode('utf-8'))
            
            if 'error' in result:
                return {
                    'statusCode': 500,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({
                        'error': 'VK API error',
                        'details': result['error']
                    })
                }
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'success': True, 'message_id': result.get('response')})
            }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)})
        }
