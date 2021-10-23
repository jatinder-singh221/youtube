from django.urls import path
from .views import creater_videos, creater_video_operations

urlpatterns = [
    path('view/',creater_videos.as_view()),
    path('view/<int:pk>/',creater_video_operations.as_view())
]