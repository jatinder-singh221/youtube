from django.urls import path
from rest_framework import urlpatterns
from .views import channel_creater_view

urlpatterns = [
    path('view/',channel_creater_view.as_view())
]