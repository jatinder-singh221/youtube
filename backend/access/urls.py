from django.urls import path
from .views import user_login, user_register, user_logout, state

urlpatterns = [
    path('login/', user_login.as_view()),
    path('register/', user_register.as_view()),
    path('logout/', user_logout.as_view()),
    path('', state.as_view())
]