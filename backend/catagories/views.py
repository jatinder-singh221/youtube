from rest_framework import  serializers, viewsets
from .serializers import catagorie_serializers
from .models import catagories
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator
from ads.premission import is_admins
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from video.models import video
from video.serializer import video_serializer


@method_decorator(csrf_protect, name = 'dispatch')
class catagories_view(viewsets.ModelViewSet):
    serializer_class = catagorie_serializers
    queryset = catagories.objects.all()
    permission_classes = [is_admins]

class all_catagories(APIView):
    permission_classes = [permissions.AllowAny]     

    def get(self, request, *args, **kwargs):
        data = catagorie_serializers(catagories.objects.all(), many = True)
        return Response(data.data)

class getfromcatagory(APIView):
    permission_classes = [permissions.AllowAny]
    
    def get(self, request, *args, **kwargs):
        look_up = self.kwargs['name']
        getcat = catagories.objects.get(catagory_name__icontains = look_up)
        query = video_serializer(video.objects.select_related('cataogories').filter(cataogories = getcat), many = True)
        return Response(query.data)

        
