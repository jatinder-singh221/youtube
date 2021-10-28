from django.core.exceptions import RequestAborted
from rest_framework.mixins import ListModelMixin, CreateModelMixin, RetrieveModelMixin, DestroyModelMixin
from rest_framework.generics import GenericAPIView
from .models import watch
from .serializer import watch_serialzer
from rest_framework.response import Response
from rest_framework import status


class list_create(GenericAPIView, ListModelMixin, CreateModelMixin):
    serializer_class = watch_serialzer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        user = self.request.user

        if int(request.data.get('user')) == user.id:
            return self.create(request, *args, **kwargs)

        else:
            return Response(status = status.HTTP_401_UNAUTHORIZED)

    def get_queryset(self):
        user = self.request.user
        return watch.objects.select_related('user').filter(user = user)


class upate_delete(GenericAPIView, RetrieveModelMixin, DestroyModelMixin):
    serializer_class = watch_serialzer
    
    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

    def get_queryset(self):
        id = self.kwargs['pk']
        user = self.request.user
        return watch.objects.select_related('user').filter(id = id, user = user)