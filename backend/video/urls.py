from django.urls import path
from .views import creater_video_view_create, creater_video_delete_view

urlpatterns = [
    path('view/',creater_video_view_create.as_view()),
    path('view/<int:pk>/',creater_video_delete_view.as_view())
]