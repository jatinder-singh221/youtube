from django.db import models
from rest_framework import serializers
from .models import comments

class user_comment_serializer(serializers.ModelSerializer):
    class Meta:
        model = comments
        exclude  = ['is_pinned']

class comment_serializer(serializers.ModelSerializer):
    class Meta:
        model = comments
        fields = '__all__'