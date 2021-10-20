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
            get_username = posted_data.validated_data.get('username')
            get_password = posted_data.validated_data.get('password')
            check_user = authenticate(username = get_username, password = get_password)

            if check_user is not None:

                if check_user.is_active:
                    login(request, check_user)
                    return Response(status = status.HTTP_202_ACCEPTED)

            else:

                return Response({'Error':"Invalid username or password"})

        else:
            return Response(posted_data.errors)
            

@method_decorator(csrf_protect, name = 'dispatch')
class user_register(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        posted_data = regisation_serializer(data = request.data)

        if posted_data.is_valid():
            posted_data.save()
            return Response(status = status.HTTP_201_CREATED)

        else:
            return Response(posted_data.errors)


class user_logout(APIView):
    
    def get(self, request, *args, **kwargs):

        if request.user.is_authenticated:
            logout(request)

        return Response(status = status.HTTP_100_CONTINUE)


