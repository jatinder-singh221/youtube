from django.urls import path
from .views import channel_creater_view, create_channel

urlpatterns = [
    path('create/',create_channel.as_view()),
    path('view/',channel_creater_view.as_view())
]