from django.db.models import fields
from rest_framework import serializers
from .models import catagories


class catagories_serializers(serializers.ModelSerializer):
    class Meta:
        model = catagories
        fields = '__all__'