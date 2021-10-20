from django.db import models
from django.contrib.auth.models import User
from video.models import video

class histroy(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE, related_name = 'histroy_user_related', related_query_name = 'history_user_query')
    video = models.ForeignKey(video, on_delete = models.CASCADE, related_name = 'histroy_video_related', related_query_name = 'histroy_video_query')
    watch_time = models.TimeField()

    def __str__(self) -> str:
        return str(self.user)
