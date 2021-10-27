from rest_framework import  viewsets
from rest_framework.response import Response
from rest_framework import views
from .models import channel_model
from rest_framework import status
from .serializer import channel_admin_serializer, channel_serializer
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator
from rest_framework.parsers import  MultiPartParser, FormParser
from rest_framework.generics import ListAPIView
from video.models import video
from video.serializer import video_serializer
from playlist.models import palylist


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
    
    def get_queryset(self):
        id = self.kwargs['pk']
        channel = channel_model.objects.get(id = id)
        return  channel.video_related.all()

# class channel_playlist(ListAPIView):
#     queryset = video.objects.all()
#     serializer_class = video_serializer
    
#     def get_queryset(self):
#         id = self.kwargs['pk']
#         channel = channel_model.objects.get(id = id)
#         return  channel.video_related.all()


@method_decorator(csrf_protect, name = 'dispatch')
class admin_channel(viewsets.ModelViewSet):
    parser_classes = [MultiPartParser, FormParser]
    queryset = channel_model.objects.all()
    serializer_class = channel_admin_serializer
