from rest_framework import routers
from rest_framework.routers import DefaultRouter
from .views import ad_view

router = DefaultRouter()
router.register(r'',ad_view)
urlpatterns = router.urls