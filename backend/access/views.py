from rest_framework.views import APIView
from .serializers import login_serializers, regisation_serializer
from rest_framework.response import Response
from rest_framework import status,permissions
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator

@method_decorator(csrf_protect, name = 'dispatch')
class user_login(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        posted_data = login_serializers(data = request.data)
        
        if posted_data.is_valid():
            username = posted_data.validated_data.get('username')
            password = posted_data.validated_data.get('password')
            check_user = authenticate(username, password)

            if check_user is not None:
                
                if check_user.is_active:
                    login(request, check_user)
                    return Response(status = status.HTTP_100_CONTINUE)

                else:
                    return Response({"Error":"You are not allowed to Login"})

            else:
                return Response(check_user.error)

        else:
            return Response(posted_data.error)

