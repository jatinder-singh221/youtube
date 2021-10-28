from django.db import models
from rest_framework import fields, serializers
from .models import report

class report_serializer(serializers.ModelSerializer):

    class Meta:
        model = report
        fields = '__all__'