from django.urls import path
from .views import list_create, upate_delete

urlpatterns = [
    path('', list_create.as_view()),
    path('view/<int:pk>/', upate_delete.as_view()),
]