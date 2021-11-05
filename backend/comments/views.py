from rest_framework import serializers, status, viewsets
from rest_framework import response
from .serializers import user_comment_serializer, comment_serializer
from .models import comments
from rest_framework.response import Response
from ads.premission import is_admins
from channel.permission import is_creator
from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework.mixins import ListModelMixin, CreateModelMixin, RetrieveModelMixin, DestroyModelMixin
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator
from video.models import video


@method_decorator(csrf_protect, name = 'dispatch')
class user_view(GenericAPIView, ListModelMixin, CreateModelMixin):
    queryset = comments.objects.all()
    serializer_class = user_comment_serializer

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
        id = self.kwargs['pk']
        get_video = video.objects.get(id = id)
        return comments.objects.filter(user = user, video = get_video)

            
@method_decorator(csrf_protect, name = 'dispatch')
class operate_comment(GenericAPIView, RetrieveModelMixin, DestroyModelMixin ):
    serializer_class = user_comment_serializer

    def get(self,request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

    def get_queryset(self):
        user = self.request.user
        id = self.kwargs['pk']
        return comments.objects.select_related('user').filter(id = id, user = user)

class video_comments(ListAPIView):
    serializer_class = user_comment_serializer
    def get_queryset(self):
        id = self.kwargs['pk']
        get_video = video.objects.get(id = id)
        return comments.objects.filter(video = get_video)


@method_decorator(csrf_protect, name = 'dispatch')
class creator_view(GenericAPIView, ListModelMixin):
    serializer_class = comment_serializer
    permission_classes = [is_creator]

    def get_queryset(self):
        id = self.kwargs['pk']
        get_video = video.objects.get(id = id)
        return comments.objects.filter(video = get_video)


@method_decorator(csrf_protect, name = 'dispatch')
class admin_view(viewsets.ModelViewSet):
    queryset = comments.objects.all()
    serializer_class = comment_serializer
    permission_classes = [is_admins]
