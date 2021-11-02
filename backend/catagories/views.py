from rest_framework import  viewsets
from .serializers import catagorie_serializers
from .models import catagories
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator
from rest_framework.parsers import MultiPartParser, FormParser
from ads.premission import is_admins


@method_decorator(csrf_protect, name = 'dispatch')
class catagories_view(viewsets.ModelViewSet):
    parser_classes = [MultiPartParser, FormParser]
    serializer_class = catagorie_serializers
    queryset = catagories.objects.all()
    permission_classes = [is_admins]
