from django.urls import path
from .views import report_create, report_list

urlpatterns = [
    path('', report_create.as_view()),
    path('reportlist/', report_list.as_view()),
]