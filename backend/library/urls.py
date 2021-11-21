from django.urls import path
from .views import create_view_library, update_delete_view

urlpatterns = [
    path('', create_view_library.as_view()),
    path('<int:pk>/', update_delete_view.as_view()),
]