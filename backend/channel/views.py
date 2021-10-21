from rest_framework import  viewsets
from rest_framework.response import Response
from rest_framework import views
from .models import channel_model
from rest_framework import status
from .serializer import channel_admin_serializer, channel_serializer


class create_channel(views.APIView):
    
    def post(self,request, *args, **kwargs):
        
        try:
            
            get_user = self.request.user
            post_data = channel_serializer(get_user, data = request.data)

            if post_data.is_valid():
                post_data.save()
                return Response(status = status.HTTP_201_CREATED)

            else:

                return Response({'error':post_data.errors})

        except:

            return Response(status = status.HTTP_401_UNAUTHORIZED)

class channel_creater_view(views.APIView):

    def get(self, request, *args, **kwargs):

        try:

            get_channel = channel_model.objects.select_related('user').get(user = self.request.user)
            channel = channel_serializer(get_channel)
            return Response({'channel':channel.data})
        
        except:
            return Response(status = status.HTTP_401_UNAUTHORIZED)

    def patch(self, request, *args, **kwargs):

        try:

            get_user = self.request.user
            update_data = channel_serializer(get_user,data = request.data)

            if update_data.isvalid():
                update_data.save()
                return Response(status = status.HTTP_202_ACCEPTED)

            else:
                return Response({'error': update_data.errors})

        except:

            return Response(status = status.HTTP_401_UNAUTHORIZED)

    def delete(self, request, *args, **kwargs):

        try:

            channel = channel_model.objects.get(user = self.request.user.id)
            channel.delete()

            return Response(status = status.HTTP_200_OK)

        except:

            return Response(status = status.HTTP_401_UNAUTHORIZED)


class admin_channel(viewsets.ModelViewSet):

        queryset = channel_model.objects.all()
        serializer_class = channel_admin_serializer
