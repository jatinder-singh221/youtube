from django.urls import path, include
from .views import channel_creater_view, create_channel, admin_channel, channel_videos, channel_playlist, get_all
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'^', admin_channel)

urlpatterns = [
    path('create/',create_channel.as_view()),
    path('',channel_creater_view.as_view()),
    path('videos/<int:pk>/',channel_videos.as_view()),
    path('playlists/<int:pk>/',channel_playlist.as_view()),
    path('all/', get_all.as_view()),
    path('channeladmin',include(router.urls))
]