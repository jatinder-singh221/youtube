from rest_framework import fields, serializers
from .models import user_extended

class user_extended_serializers(serializers.ModelSerializer):
    class Meta:
        model = user_extended
        fields = '__all__'