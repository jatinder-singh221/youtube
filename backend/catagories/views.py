from rest_framework import  viewsets
from .serializers import catagories_serializers
from .models import catagories
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator


@method_decorator(csrf_protect, name = 'dispatch')
class catagories_view(viewsets.ModelViewSet):
    serializer_class = catagories_serializers
    queryset = catagories.objects.all()
