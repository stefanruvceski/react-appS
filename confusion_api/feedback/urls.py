
from django.urls import path
from . import views

urlpatterns = [
    path('get/',views.get_feedback,name = 'get-feedback' ),  
    path('post/',views.post_feedback,name = 'post-feedback' ),   
]