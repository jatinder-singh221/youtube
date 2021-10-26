from rest_framework import urlpatterns
from rest_framework import routers
from rest_framework.routers import DefaultRouter
from .views import user_library

router = DefaultRouter()
router.register(r'^', user_library)

urlpatterns = router.urls