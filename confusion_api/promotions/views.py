import json,os
from django.http import JsonResponse

# Create your views here.
def get_dishes(request):
    f = open(os.path.abspath('promotions\\promotions_db.json'))
    data = json.loads(f.read())
    return JsonResponse(data)