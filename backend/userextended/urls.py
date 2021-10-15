from django.urls import path
from .views import user_extended_view

urlpatterns = [
    path('userdetails', user_extended_view.as_view())
]
