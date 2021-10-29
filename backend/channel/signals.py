from django.dispatch import receiver
from  .models import channel_model
from django.db.models.signals import post_save, post_delete
from django.contrib.auth.models import Group


@receiver(post_save, sender = channel_model)
def add_group(sender, created, instance, *args, **kwargs):

    if created:
        get_group = Group.objects.get(id = 2)
        instance.user.groups.add(get_group)

@receiver(post_delete, sender = channel_model)
def delete_group(sender, instance, *args, **kwargs):
    get_group = Group.objects.get(id = 2)
    instance.user.groups.remove(get_group)