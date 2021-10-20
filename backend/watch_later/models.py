from django.db import models
from django.contrib.auth.models import User
from video.models import video

class watch(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE, related_name = 'watch_user_related', related_query_name = 'watch_user_query')
    video = models.ForeignKey(video, on_delete = models.CASCADE, related_name = 'watch_video_related', related_query_name = 'watch_video_query')

    def __str__(self) -> str:
        return str(self.user)