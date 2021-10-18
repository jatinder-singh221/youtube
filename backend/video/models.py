import re
from django.db import models
from channel.models import channel_model
from userextended.validators import charinput_validation, image_validation
from catagories.models import catagories
from channel.validators import text_field
from ads.validators import video_check

class video(models.Model):

    def video_tumb_url(instance, filename):
        return f'thumb/{instance}/{filename}'

    def video_url(instance, filename):
        return f'video/{instance}/{filename}'

    channel = models.ForeignKey(channel_model, on_delete = models.CASCADE, related_name = 'video_related', related_query_name = 'video_query')
    video_name  = models.CharField(max_length = 225, validators = [charinput_validation])
    video_thumb_nail = models.ImageField(upload_to = video_tumb_url, validators = [image_validation])
    video = models.FileField(upload_to = video_url, validators = [video_check])
    video_description = models.TextField(validators = [text_field])
    upload_time = models.DateTimeField(auto_now_add = True)
    cataogories = models.ForeignKey(catagories, on_delete = models.CASCADE, related_name = 'catagory_realted', related_query_name = 'catagory_query')

    def __str__(self):
        return f"{str(self.channel)} {str(self.video_name)}"
