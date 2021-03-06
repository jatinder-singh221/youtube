from rest_framework import  viewsets, permissions
from rest_framework.response import Response
from rest_framework import views
from .models import channel_model
from rest_framework import status
from .serializer import channel_admin_serializer, channel_serializer
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator
from rest_framework.parsers import  MultiPartParser, FormParser
from rest_framework.generics import ListAPIView, RetrieveAPIView
from video.models import video
from video.serializer import video_serializer
from playlist.models import palylist
from playlist.serializers import playlist_serializer
from .permission import is_creator
from ads.premission import is_admins


@method_decorator(csrf_protect, name = 'dispatch')
class create_channel(views.APIView):
    parser_classes = [MultiPartParser, FormParser]
    
    def post(self,request, *args, **kwargs):
        
        get_user = self.request.user
        post_data = channel_serializer(get_user, data = request.data)

        if post_data.is_valid():
            post_data.save()
            return Response(status = status.HTTP_201_CREATED)

        else:

            return Response({'error':post_data.errors})


@method_decorator(csrf_protect, name = 'dispatch')
class channel_creater_view(views.APIView):
    parser_classes = [MultiPartParser, FormParser]
    permission_classes = [is_creator]

    def get(self, request, *args, **kwargs):
        get_channel = channel_model.objects.select_related('user').get(user = self.request.user)
        channel = channel_serializer(get_channel)
        return Response({'channel':channel.data})
    

    def patch(self, request, *args, **kwargs):
        get_user = self.request.user.channel_realted
        update_data = channel_serializer(get_user,data = request.data, partial = True)

        if update_data.is_valid():
            update_data.save()
            return Response(status = status.HTTP_202_ACCEPTED)

        else:
            return Response({'error': update_data.errors})


    def delete(self, request, *args, **kwargs):
            channel = channel_model.objects.get(user = self.request.user.id)
            channel.delete()

            return Response(status = status.HTTP_200_OK)

class channel_videos(ListAPIView):
    queryset = video.objects.all()
    serializer_class = video_serializer
    permission_classes = [permissions.AllowAny]
    
    def get_queryset(self):
        id = self.kwargs['pk']
        channel = channel_model.objects.get(id = id)
        return  channel.video_related.all()

class channel_playlist(ListAPIView):
    queryset = palylist.objects.all()
    serializer_class = playlist_serializer
    permission_classes = [is_creator]

    def get_queryset(self):
        id = self.kwargs['pk']
        channel = channel_model.objects.get(id = id)
        return self.queryset.select_related('channel_is').filter(channel_is = channel)

class channel_about(RetrieveAPIView):
    queryset = channel_model.objects.all()
    serializer_class = channel_serializer
    permission_classes = [permissions.AllowAny]

@method_decorator(csrf_protect, name = 'dispatch')
class admin_channel(viewsets.ModelViewSet):
    parser_classes = [MultiPartParser, FormParser]
    queryset = channel_model.objects.all()
    serializer_class = channel_admin_serializer
    permission_classes = [is_admins]


class get_all(ListAPIView):
    queryset = channel_model.objects.all()
    serializer_class = channel_serializer
    permission_classes = [permissions.AllowAny]