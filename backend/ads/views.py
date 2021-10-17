from .serializer import ad_serializer
from .models import ad_creation
from rest_framework import viewsets

class ad_view(viewsets.ModelViewSet):
    serializer_class = ad_serializer
    queryset = ad_creation.objects.all()