from django.urls import path
from .views import create_list_view, updata_delete_view

urlpatterns = [
    path('', create_list_view.as_view()),
    path('<int:pk>/', updata_delete_view.as_view()),
]