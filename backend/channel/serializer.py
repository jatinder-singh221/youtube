from django.db import models
from rest_framework import fields, serializers
from .models import channel_model


class channel_serializer(serializers.ModelSerializer):

    class Meta:
        model = channel_model
        exclude = ['can_upload_video', 'id']


class channel_admin_serializer(serializers.ModelSerializer):

    class Meta:
        model = channel_model
        fields = '__all__'