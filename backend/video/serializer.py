from django.db import models
from .models import video
from rest_framework import fields, serializers

class video_serializer(serializers.ModelSerializer):
    class Meta:
        model = video
        fields = '__all__'