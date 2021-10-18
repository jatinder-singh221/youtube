from django.db import models
from django.contrib.auth.models import User
from channel.models import channel_model

class subscriber(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE, related_name = 'subscriber_related', related_query_name = 'subscriber_query')
    channel = models.ForeignKey(channel_model, on_delete = models.CASCADE, related_name = 'channel_sub_related', related_query_name = 'channel_sub_query')

    def __str__(self):
        return str(self.user)+ str(self.channel)

