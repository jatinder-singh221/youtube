from .serializer import library_serializer
from .models import library
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin
from rest_framework import status
from rest_framework.response import Response


class create_view_library(GenericAPIView, ListModelMixin, CreateModelMixin):
    serializer_class = library_serializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


    def get_queryset(self):
        user = self.request.user
        return library.objects.select_related('user').filter(user = user)

    def post(self, request, *args, **kwargs):
        user = self.request.user

        if int(request.data.get('user')) == user.id:
            return self.create(request, *args, **kwargs)

        else:
            return Response(status = status.HTTP_401_UNAUTHORIZED)

class update_delete_view(GenericAPIView, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin):
    serializer_class = library_serializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        user = self.request.user

        if int(request.data.get('user')) == user.id:
            return self.partial_update(request, *args, **kwargs)

        else:
            return Response(status = status.HTTP_401_UNAUTHORIZED)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

    def get_queryset(self):
        id = self.kwargs['pk']
        user = self.request.user
        get_library = library.objects.filter(id = id, user = user)
        return get_library