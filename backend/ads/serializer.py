from rest_framework import serializers
from .models import ad_creation

class ad_serializer(serializers.ModelSerializer):
    class Meta:
        model = ad_creation
        fields = '__all__'