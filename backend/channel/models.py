from django.db import models
from django.contrib.auth.models import User
from userextended.validators import charinput_validation, image_validation
from .validators import text_field

class channel_model(models.Model):

    def cover_url(instance, filename):
        return f'cover/{instance}/{filename}'

    def image_url(instance, filename):
        return f'channel/{instance}/{filename}'

    user = models.OneToOneField(User, on_delete = models.CASCADE,related_name = 'channel_realted', related_query_name = 'channel_query')
    channel_name = models.CharField(max_length = 225, validators = [charinput_validation])
    channel_description = models.TextField(validators = [text_field])
    channel_cover = models.ImageField(upload_to = cover_url, validators = [image_validation] )
    channel_picture = models.ImageField(upload_to = image_url, validators = [image_validation] )
    can_upload_video = models.BooleanField(default = True)
    is_live = models.BooleanField(default = False)

    def __str__(self):
        return str(self.channel_name)

    class Meta:
        verbose_name = 'Channel'

