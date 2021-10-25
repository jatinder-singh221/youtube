from rest_framework.mixins import ListModelMixin, CreateModelMixin, RetrieveModelMixin, DestroyModelMixin, UpdateModelMixin
from rest_framework.generics import GenericAPIView
from .models import video
from rest_framework.response import Response
from rest_framework import status, viewsets
from .serializer import video_serializer
from channel.models import channel_model
from rest_framework.parsers import MultiPartParser, FormParser
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator


@method_decorator(csrf_protect, name = 'dispatch')
class creater_video_view_create(ListModelMixin, GenericAPIView, CreateModelMixin):
    queryset = video.objects.all()
    serializer_class = video_serializer
    parser_classes = [MultiPartParser, FormParser]

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        user = self.request.user
        channel = channel_model.objects.select_related('user').get(user = user.id)

        if int(request.data.get('channel')) == channel.id:

            return self.create(request, *args, **kwargs)

        else:
            return Response(status = status.HTTP_401_UNAUTHORIZED)

    def get_queryset(self):
        user = self.request.user
        channel = channel_model.objects.select_related('user').get(user = user.id)  
        return self.queryset.filter(channel = channel.id)


@method_decorator(csrf_protect, name = 'dispatch')
class creater_video_delete_view(GenericAPIView, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin):
    serializer_class = video_serializer
    parser_classes = [MultiPartParser, FormParser]

    def get_queryset(self):
        id = self.kwargs['pk']
        user = self.request.user
        channel = channel_model.objects.select_related('user').get(user = user.id)  
        return channel.video_related.all().filter(id = id)

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        user = self.request.user
        channel = channel_model.objects.select_related('user').get(user = user.id) 

        if request.data.get('channel') is not None:

            if int(request.data.get('channel')) == channel.id:
                return self.partial_update(request, *args, **kwargs)

            else:
                return Response(status = status.HTTP_401_UNAUTHORIZED)
                
        else:
            return self.partial_update(request, *args, **kwargs)
    
    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class user_video_view(RetrieveModelMixin, GenericAPIView):
    queryset = video.objects.all()
    serializer_class = video_serializer
    parser_classes = [MultiPartParser, FormParser]

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)


@method_decorator(csrf_protect, name = 'dispatch')
class admin_video_view(viewsets.ModelViewSet):
    parser_classes = [MultiPartParser, FormParser]
    queryset = video.objects.all()
    serializer_class = video_serializer