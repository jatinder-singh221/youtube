from django.contrib import admin
from django.urls import path,include
from decouple import config
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path(config('ADMIN_URL'), admin.site.urls),
    path('backendabout/',include('userextended.urls')),
    path('backendauth/',include('access.urls')),
    path('backendads',include('ads.urls')),
    path('backendcatagories',include('catagories.urls')),
    path('backendchannel/', include('channel.urls')),
    path('backendvideo/', include('video.urls')),
    path('backendsubscriber/', include('subscriber.urls')),
    path('backendvotes/', include('dilike.urls')),
    path('backendlibrary/', include('library.urls')),
    path('backendplaylist/', include('playlist.urls')),
    path('backendreport/', include('report.urls')),
    path('backendhistory/', include('view_history.urls')),
    path('backendwatch/', include('watch_later.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,  document_root = settings.MEDIA_ROOT)
