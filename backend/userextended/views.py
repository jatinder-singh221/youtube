from rest_framework.views import APIView
from .serializer import user_extended_serializers
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator

@method_decorator(csrf_protect, name = 'dispatch')
class user_extended_view(APIView):

    def get(self, request, *args, **kwargs):

        try:

            current_user = request.user
            send_data = user_extended_serializers(current_user.userextended_related)
            return Response(send_data.data)
            
        except :
            return Response(status=status.HTTP_401_UNAUTHORIZED)        

    def patch(self, request, *args, **kwargs):
        
        try:
            current_user = request.user
            get_user = User.objects.get(id = current_user.id)
            update_date = user_extended_serializers(get_user, data = request.data, partial = True)

            if update_date.is_valid():
                update_date.save()
                return Response(status = status.HTTP_202_ACCEPTED)

            else:

                return Response(update_date.error) 
        except:

            return Response(status=status.HTTP_401_UNAUTHORIZED) 
