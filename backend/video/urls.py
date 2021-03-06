from django.urls import path,include
from .views import creater_video_view_create, creater_video_delete_view, admin_video_view, user_video_view, video_view, all_video
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'^', admin_video_view)

urlpatterns = [
    path('', all_video.as_view()),
    path('view/',creater_video_view_create.as_view()),
    path('view/<int:pk>/',creater_video_delete_view.as_view()),
    path('watch/<int:pk>/', user_video_view.as_view()),
    path('videoviews/<int:pk>/', video_view.as_view()),
    path('videoadmin',include(router.urls) )
]