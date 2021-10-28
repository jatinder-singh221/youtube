from django.urls import path
from .views import create_list_view, update_delete

urlpatterns = [
    path('',create_list_view.as_view()),
    path('view/<int:pk>/',update_delete.as_view())
]