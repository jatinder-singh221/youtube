from django.urls import path, include
from .views import subscriber_view, subscriber_add_remove, adminsubscriber, Allsubscriber
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'^', adminsubscriber)

urlpatterns = [
    path('',Allsubscriber.as_view()),
    path('<int:pk>/', subscriber_view.as_view()),
    path('view/<int:pk>/', subscriber_add_remove.as_view()),
    path('adminsubscriber', include(router.urls))
]