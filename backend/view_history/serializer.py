from rest_framework import fields, serializers
from .models import histroy

class history_serializer(serializers.ModelSerializer):

    class Meta:
        model = histroy
        fields = '__all__'