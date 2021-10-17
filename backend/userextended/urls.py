from django.urls import path
from .views import user_extended_view

urlpatterns = [
    path('', user_extended_view.as_view())
]
