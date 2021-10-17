from django.db import models
from django.contrib.auth.models import User

class channel_model(models.Model):

    def cover_url(instance, filename):
        return f'cover/{instance.user.id}/{filename}'

    def image_url(instance, filename):
        return f'channel/{instance.user.id}/{filename}'

    user = models.OneToOneField(User, on_delete = models.CASCADE,related_name = 'channel_realted', related_query_name = 'channel_query')
    channel_name = models.CharField(max_length = 225)
    channel_description = models.TextField()
    channel_cover = models.ImageField(upload_to = cover_url )
    channel_picture = models.ImageField(upload_to = image_url)
    can_upload_video = models.BooleanField(default = True)
    is_live = models.BooleanField(default = False)

class video(models.Model):
    channel = models.ForeignKey(channel_model, on_delete = models.CASCADE, related_name = 'video_related', related_query_name = 'video_query')
    video_name  = models.CharField(max_length = 225)
    video_thumb_nail = models.ImageField()
    video_description = models.TextField()
    upload_time = models.DateTimeField(auto_now_add = True)
    cataogories = models.OneToOneField()


class palylist(models.Model):
    channel_is = models.ForeignKey(channel_model, on_delete = models.CASCADE, related_name = 'playlist_related', related_query_name = 'playlist_query')
    name = models.CharField(max_length = 225)
    video = models.ManyToManyField(video, related_name = 'playlist_video_related', related_query_name = 'playlist_video_query')
    is_private = models.BooleanField(default = False)


