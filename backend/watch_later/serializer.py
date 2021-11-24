from rest_framework import serializers
from .models import watch

class watch_serialzer(serializers.ModelSerializer):

    class Meta:
        model = watch
        fields = "__all__"
        depth = 2