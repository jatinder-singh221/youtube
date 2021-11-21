from django.db.models import fields
from rest_framework import serializers
from .models import subscriber

class subscriber_serializer(serializers.ModelSerializer):
    class Meta:
       model = subscriber
       fields = ['user', 'channel'] 
       depth = 1
        