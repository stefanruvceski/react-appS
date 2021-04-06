import json,os
from django.http import JsonResponse

# Create your views here.
def get_dishes(request):
    f = open(os.path.abspath('dishes\\dishes_db.json'))
    data = json.loads(f.read())
    return JsonResponse(data)