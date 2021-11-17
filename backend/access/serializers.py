from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password

class login_serializer(serializers.Serializer):
    username = serializers.CharField(max_length = 225)
    password = serializers.CharField(max_length = 125)

class registration_serializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])

    class Meta:
        model = User
        fields = ('username', 'password', 'email', 'first_name', 'last_name')



