from rest_framework.routers import DefaultRouter
from .views import catagories_view, all_catagories, getfromcatagory
from django.urls import path, include

router = DefaultRouter()
router.register(r'^', catagories_view)

urlpatterns = [
    path('',all_catagories.as_view() ),
    path('admin/', include(router.urls)),
    path('get/<str:name>/', getfromcatagory.as_view())
]