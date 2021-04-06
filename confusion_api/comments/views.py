import json, os
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
def get_comments(request):
    with open(os.path.abspath('comments\\comments_db.json')) as f:
        data = json.loads(f.read())
        return JsonResponse(data)

# @api_view(['POST'])
@csrf_exempt
def post_comment(request):
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        content = json.loads(body_unicode)
        with open(os.path.abspath('comments\\comments_db.json')) as f:
        
            data = json.loads(f.read())
            nextId = len(data['comments'])
            
            content['id'] = nextId;
             
            data['comments'].append(content)
            print(content)
            json.dump(data, open(os.path.abspath('comments\\comments_db.json'), "w"), indent = 4)
            return JsonResponse(content)
        
    