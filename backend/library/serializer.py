from rest_framework import serializers
from .models import library

class library_serializer(serializers.ModelSerializer):

    class Meta:
        model = library
        fields = "__all__"