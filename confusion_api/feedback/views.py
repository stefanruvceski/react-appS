import json, os
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def get_feedback(request):
    f = open(os.path.abspath('feedback\\feedback_db.json'))
    data = json.loads(f.read())
    return JsonResponse(data)

@csrf_exempt
def post_feedback(request):
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        content = json.loads(body_unicode)
        with open(os.path.abspath('feedback\\feedback_db.json')) as f:
            data = json.loads(f.read())
            nextId = len(data['feedback'])
            content['id'] = nextId;
            data['feedback'].append(content)
            json.dump(data, open(os.path.abspath('feedback\\feedback_db.json'), "w"), indent = 4)
            return JsonResponse(content)