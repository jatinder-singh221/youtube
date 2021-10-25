from django.urls import path
from .views import subscriber_view, subscriber_add_remove

urlpatterns = [
    path('<int:pk>/', subscriber_view.as_view()),
    path('view/<int:pk>/', subscriber_add_remove.as_view())
]