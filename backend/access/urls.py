from django.urls import path
from .views import user_login, user_register, user_logout

urlpatterns = [
    path('userlogin', user_login.as_view()),
    path('userregister', user_register.as_view()),
    path('userlogout', user_logout.as_view()),
]