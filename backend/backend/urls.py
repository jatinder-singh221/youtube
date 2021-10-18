from django.contrib import admin
from django.urls import path,include
from decouple import Config, config
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path(config('ADMIN_URL'), admin.site.urls),
    path('aboutuser/',include('userextended.urls')),
    path('',include('access.urls')),
    path('ads',include('ads.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,  document_root = settings.MEDIA_ROOT)
