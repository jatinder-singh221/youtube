from rest_framework import urlpatterns
from rest_framework.routers import DefaultRouter
from .views import admin_view, user_view, operate_comment,video_comments, creator_view
from django.urls import path, include

router = DefaultRouter()
router.register(r'^',admin_view)

urlpatterns = [
    path('<int:pk>/', user_view.as_view()),
    path('view/<int:pk>/', operate_comment.as_view()),
    path('comments/<int:pk>/', video_comments.as_view()),
    path('creatorcomments/<int:pk>/', video_comments.as_view()),
    path('commentadmin', include(router.urls) )
]