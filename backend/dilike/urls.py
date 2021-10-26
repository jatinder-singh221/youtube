from django.urls import path
from .views import get_like_dislikes, add_remove_like,add_remove_dislike

urlpatterns = [
    path('<int:pk>/', get_like_dislikes.as_view()),
    path('addlike/<int:pk>/', add_remove_like.as_view()),
    path('adddislike/<int:pk>/', add_remove_dislike.as_view()),
]