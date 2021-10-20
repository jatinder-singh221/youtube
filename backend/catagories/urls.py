from rest_framework.routers import DefaultRouter
from .views import catagories_view

router = DefaultRouter()
router.register(r'^', catagories_view)
urlpatterns = router.urls