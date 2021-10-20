from django.db import models
from django.contrib.auth.models import User
from userextended.validators import charinput_validation
from video.models import video

class library(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE, related_name = 'user_library_related', related_query_name = 'user_library_query')
    name = models.CharField(max_length = 225, validators = [charinput_validation])
    videos = models.ManyToManyField(video, related_name = 'library_video_related', related_query_name = 'library_video_query')

    def __str__(self) -> str:
        return str(self.name)