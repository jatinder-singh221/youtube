from rest_framework import serializers
from .models import like_dislike

class like_dislike_serializer(serializers.ModelSerializer):

    class Meta:
        model = like_dislike
        fields = '__all__'
        depth = 2