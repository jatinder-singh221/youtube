from .serializer import ad_serializer
from .models import ad_creation
from rest_framework import viewsets
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator

@method_decorator(csrf_protect, name = 'dispatch')
class ad_view(viewsets.ModelViewSet):
    serializer_class = ad_serializer
    queryset = ad_creation.objects.all()