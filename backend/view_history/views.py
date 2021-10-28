from rest_framework.generics import GenericAPIView
from rest_framework.mixins import CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin
from .models import histroy
from .serializer import history_serializer
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator


@method_decorator(csrf_protect, name = 'dispatch')
class create_list_view(GenericAPIView, CreateModelMixin, ListModelMixin):
    queryset = histroy.objects.all()
    serializer_class = history_serializer

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
        return histroy.objects.select_related('user').filter(user = user)


@method_decorator(csrf_protect, name = 'dispatch')
class update_delete(GenericAPIView, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin):
    serializer_class = history_serializer

    def get(self, request, pk, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def get_queryset(self):
        user = self.request.user
        return histroy.objects.select_related('user').filter(user = user)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
