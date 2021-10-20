from django.db import models
from django.contrib.auth.models import User
from video.models import video
from channel.validators import text_field

class comments(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE, related_name = 'comment_related_user', related_query_name = 'comment_user_query')
    video = models.ForeignKey(video , on_delete = models.CASCADE, related_name = 'video_coment_related', related_query_name = 'video_comment_related')
    comment_text = models.TextField(validators = [text_field])
    date = models.DateTimeField(auto_now_add = True)
    is_pinned = models.BooleanField(default = False)

    def __str__(self):
        return str(self.comment_text)

