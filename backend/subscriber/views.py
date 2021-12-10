from .models import subscriber
from rest_framework import permissions
from .serializer import subscriber_serializer
from channel.models import channel_model
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, viewsets
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator


class subscriber_view(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, pk,  *args, **kwargs):
        channel = channel_model.objects.get(id = pk)
        subscriber = channel.channel_sub_related.all()
        return Response({'subscriber_count':subscriber.count()})


@method_decorator(csrf_protect, name = 'dispatch')
class subscriber_add_remove(APIView):

    def get(self, request, pk, *args, **kwargs):
        user = self.request.user
        channel = channel_model.objects.get(id = pk)
        is_subscriber = subscriber.objects.filter(channel = channel, user = user).exists()
        return Response({'is_subscriber': is_subscriber})

    def delete(self, requset, pk, *args, **kwargs):
            user = self.request.user
            channel = channel_model.objects.get(id = pk)
            is_subscriber = subscriber.objects.filter(channel = channel, user = user)

            if is_subscriber.exists() is True:
                is_subscriber.delete()
                return Response({'is_subscriber': "removed"})

            else:
                return Response({'is_subscriber': "Please subscribe"})

    def put(self, request, pk, *args, **kwargs):
        user = self.request.user
        channel = channel_model.objects.get(id = pk)

        if int(request.data.get('user')) == user.id and int(request.data.get('channel')) == channel.id:
            put_data = subscriber_serializer(data = request.data)
            if put_data.is_valid():
                put_data.save()
                return Response(status = status.HTTP_201_CREATED)

            else:
                return Response({'error':put_data.errors})

        else:
            return Response(status = status.HTTP_401_UNAUTHORIZED)


@method_decorator(csrf_protect, name = 'dispatch')
class adminsubscriber(viewsets.ModelViewSet):
    queryset = subscriber.objects.all()
    serializer_class = subscriber_serializer

class Allsubscriber(APIView):

    def get(self, request, *args, **kwargs):
        sub = subscriber_serializer(subscriber.objects.select_related('user').filter(user = self.request.user), many = True)
        return Response(sub.data)