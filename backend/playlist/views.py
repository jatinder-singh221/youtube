from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin
from .serializers import playlist_serializer
from .models import palylist
from rest_framework.response import Response
from rest_framework import status
from channel.models import channel_model
from rest_framework import viewsets
from rest_framework.parsers import  MultiPartParser, FormParser
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator


@method_decorator(csrf_protect, name = 'dispatch')
class create_list_view(GenericAPIView, ListModelMixin, CreateModelMixin):
    serializer_class = playlist_serializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        user = self.request.user
        channel = channel_model.objects.get(user = user)
        if int(request.data.get('channel_is')) == channel.id:
            return self.create(request, *args, **kwargs)

        else:
            return Response(status = status.HTTP_401_UNAUTHORIZED)

    def get_queryset(self):
        user = self.request.user
        get_channel = channel_model.objects.select_related('user').get(user = user)
        return palylist.objects.select_related('channel_is').filter(channel_is = get_channel)


@method_decorator(csrf_protect, name = 'dispatch')
class updata_delete_view(RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin, GenericAPIView):
    serializer_class = playlist_serializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        user = self.request.user
        channel = channel_model.objects.get(user = user)
        if int(request.data.get('channel_is')) == channel.id:
            return self.partial_update(request, *args, **kwargs)

        else:
            return Response(status = status.HTTP_401_UNAUTHORIZED)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


    def get_queryset(self):
        id = self.kwargs['pk']
        user = self.request.user
        get_channel = channel_model.objects.select_related('user').get(user = user)
        return palylist.objects.select_related('channel_is').filter(channel_is = get_channel, id = id)


@method_decorator(csrf_protect, name = 'dispatch')
class adminplaylist(viewsets.ModelViewSet):
    queryset = palylist.objects.all()
    serializer_class = playlist_serializer