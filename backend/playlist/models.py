from django.db import models
from channel.models import channel_model
from video.models import video
from userextended.validators import charinput_validation

class palylist(models.Model):
    channel_is = models.ForeignKey(channel_model, on_delete = models.CASCADE, related_name = 'playlist_related', related_query_name = 'playlist_query')
    name = models.CharField(max_length = 225, validators = [charinput_validation])
    video = models.ManyToManyField(video, related_name = 'playlist_video_related', related_query_name = 'playlist_video_query')
    is_private = models.BooleanField(default = False)

    def __str__(self):
        return f"{str(self.channel_is)} {str(self.name)}"
