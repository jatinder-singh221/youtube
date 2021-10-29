from django.dispatch import receiver
from .models import user_extended
from django.db.models.signals import post_save
from django.contrib.auth.models import User, Group

@receiver(post_save, sender = User)
def create_user_extended(sender, instance, created, *args, **kwargs):
    if created:
        user_extended.user_extended_manager.create(user = instance)
        get_user_group = Group.objects.get(id = 1)
        instance.groups.add(get_user_group)