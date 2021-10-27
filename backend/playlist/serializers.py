from django.db.models.enums import Choices
from django.utils.regex_helper import Choice
from rest_framework import serializers
from .models import palylist
from channel.models import channel_model

class userevideo(serializers.PrimaryKeyRelatedField):

    def get_queryset(self):
        user = self.context['request'].user
        get_channel = channel_model.objects.select_related('user').get(user = user)
        video_choices = get_channel.video_related.all()
        return video_choices

class playlist_serializer(serializers.ModelSerializer):
    video = userevideo(many = True)

    class Meta:
        model = palylist
        fields = '__all__' 