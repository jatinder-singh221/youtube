from django.contrib import admin
from django.urls import path,include
from decouple import config

urlpatterns = [
    path(config('ADMIN_URL'), admin.site.urls),
    path('',include('userextended.urls'))
]
