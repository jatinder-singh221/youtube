from django.urls import path, include
from .views import create_list_view, updata_delete_view, adminplaylist, get_playists
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'^', adminplaylist)

urlpatterns = [
    path('', create_list_view.as_view()),
    path('<int:pk>/', updata_delete_view.as_view()),
    path('playlist/<int:pk>/', get_playists.as_view()),
    path('playlistadmin', include(router.urls) )
]