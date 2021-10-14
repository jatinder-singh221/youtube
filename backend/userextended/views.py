from rest_framework.views import APIView
from .models import user_extended
from .serializer import user_extended_serializers
from rest_framework.response import Response
from rest_framework import status

class user_extended_view(APIView):

    def get(self, request, *args, **kwargs):

        try:

            current_user = request.user
            send_data = user_extended_serializers(current_user.userextended_related)
            return Response(send_data.data)
            
        except:
            
            return Response(status=status.HTTP_404_NOT_FOUND)        

    def patch(self, request, *args, **kwargs):
        pass
