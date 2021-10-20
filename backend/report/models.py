from django.db import models
from video.models import video
from django.contrib.auth.models import User
from userextended.validators import charinput_validation

class report(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE, related_name = 'report_user_related', related_query_name = 'report_user_query')
    video = models.ForeignKey(video, on_delete = models.CASCADE, related_name = 'report_video_related', related_query_name = 'report_video_query')

    REPORT = (
        ('a','sexual content'),
        ('b','voliance'),
        ('c','Hate Speech'),
        ('d','Other'),
    )
    report = models.CharField(max_length = 30, choices = REPORT, validators = [charinput_validation])

    def __str__(self) -> str:
        return str(self.user)