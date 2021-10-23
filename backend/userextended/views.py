from rest_framework.views import APIView
from .serializer import user_extended_serializers
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator
from rest_framework.parsers import MultiPartParser,FormParser

@method_decorator(csrf_protect, name = 'dispatch')
class user_extended_view(APIView):
    parser_classes = [MultiPartParser, FormParser]

    def get(self, request, *args, **kwargs):
        current_user = request.user
        send_data = user_extended_serializers(current_user.userextended_related)
        return Response(send_data.data)       

    def patch(self, request, *args, **kwargs):
        current_user = self.request.user
        user = User.objects.get(id = current_user.id).userextended_related
        update_data = user_extended_serializers(user, data = request.data, partial = True)
        
        if update_data.is_valid():
            update_data.save()
            return Response(status = status.HTTP_202_ACCEPTED)

        else:

            return Response(update_data.errors) 
