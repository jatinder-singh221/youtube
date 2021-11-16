from rest_framework.views import APIView
from .serializers import login_serializer, registration_serializer
from rest_framework.response import Response
from rest_framework import status,permissions
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator

# @method_decorator(csrf_protect, name = 'dispatch')
class user_login(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        posted_data = login_serializer(data = request.data)
        if posted_data.is_valid():
            get_username = posted_data.validated_data.get('username')
            get_password = posted_data.validated_data.get('password')
            check_user = authenticate(username = get_username, password = get_password)

            if check_user is not None:

                if check_user.is_active:
                    login(request, check_user)
                    return Response({'success':'login'})

            else:

                return Response({'Error':"Invalid username or password"})

        else:
            return Response(posted_data.errors)
            

@method_decorator(csrf_protect, name = 'dispatch')
class user_register(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        posted_data = registration_serializer(data = request.data)

        if posted_data.is_valid():
            posted_data.save()
            username = posted_data.validated_data.get('username')
            password = posted_data.validated_data.get('password')
            user = authenticate(username = username, password = password)
            login(request, user)
            return Response(status = status.HTTP_201_CREATED)

        else:
            return Response(posted_data.errors)


class user_logout(APIView):
    
    def get(self, request, *args, **kwargs):

        if request.user.is_authenticated:
            logout(request)

        return Response(status = status.HTTP_100_CONTINUE)


class state(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, *args, **kwargs):
        user = self.request.user
        
        if user.is_anonymous:
            data = {
                'username':'unkown',
                'isLogin':False,
                'hasNotification':False,
                'isCreator':False,
                'isAdmn':False,
            }
            return Response({'state':data})

        elif user.is_authenticated:
            group = user.groups.all()[0]

            if group.name == 'admins':
                data = {
                    'username':f'{user.first_name} {user.last_name}',
                    'isLogin':True,
                    'hasNotification':False,
                    'isCreator':False,
                    'isAdmn':True,
                }
                return Response({'state':data})

            elif group.name == 'creators':
                data = {
                    'username':f'{user.first_name} {user.last_name}',
                    'isLogin':True,
                    'hasNotification':False,
                    'isCreator':True,
                    'isAdmn':False,
                }
                return Response({'state':data})

            else:
                data = {
                    'username':f'{user.first_name} {user.last_name}',
                    'isLogin':True,
                    'hasNotification':False,
                    'isCreator':False,
                    'isAdmn':False,
                }
                return Response({'state':data})
