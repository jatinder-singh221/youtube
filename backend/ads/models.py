from django.db import models
from .validators import video_check

class ad_creation(models.Model):
    video = models.FileField(upload_to = 'ad/%y', validators = [video_check])
    link = models.URLField(max_length = 225)
    date = models.DateField(auto_now_add = True)

    def __str__(self):
        return str(self.link)
