
from django.urls import path
from . import views

urlpatterns = [
    path('get/',views.get_comments,name = 'get-comments' ),   
    path('post/',views.post_comment,name = 'post-comments' ),   
]