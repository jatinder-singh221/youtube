from django.urls import path, include
from .views import channel_creater_view, create_channel, admin_channel
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'^', admin_channel)

urlpatterns = [
    path('create/',create_channel.as_view()),
    path('view/',channel_creater_view.as_view()),
    path('channeladmin',include(router.urls))
]