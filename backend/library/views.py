from rest_framework import viewsets
from .models import library
from .serializer import library_serializer

class user_library(viewsets.ModelViewSet):
    queryset = library.objects.all()
    serializer_class = library_serializer