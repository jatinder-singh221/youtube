from .serializer import ad_serializer
from .models import ad_creation
from rest_framework import viewsets, permissions
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator
from rest_framework.parsers import MultiPartParser, FormParser
from .premission import is_admins


@method_decorator(csrf_protect, name = 'dispatch')
class ad_view(viewsets.ModelViewSet):
    parser_classes = [MultiPartParser, FormParser]
    serializer_class = ad_serializer
    queryset = ad_creation.objects.all()
    permission_classes = [is_admins]