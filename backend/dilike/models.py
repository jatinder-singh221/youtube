from django.db import models
from django.contrib.auth.models import User
from video.models import video

class like_dislike(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE, related_query_name = 'like_query', related_name = 'like_related')
    video = models.ForeignKey(video, on_delete = models.CASCADE, related_query_name = 'like_video_query', related_name = 'like_video_related')
    is_like = models.BooleanField(default = False)
    is_dislike = models.BooleanField(default = False)

    def __str__(self) -> str:
        return str(self.user)

    class Meta:
        verbose_name = 'Vote'
        
