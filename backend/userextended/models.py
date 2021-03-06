from django.db import models
from django.contrib.auth.models import User
from .validators import charinput_validation, dob_validation, image_validation, phone_validation

class user_extended(models.Model):

    def get_user_name(instance, filename):
        return f'{instance.user.id}/{filename}' 

    user = models.OneToOneField(User, on_delete = models.CASCADE, related_name = 'userextended_related', related_query_name = 'userextended_query')
    user_profile = models.ImageField(upload_to = get_user_name, validators = [image_validation])
    date_of_birth = models.DateField(null = True, validators = [dob_validation])
    address = models.CharField(max_length = 225,validators = [charinput_validation])
    country = models.CharField(max_length = 225, validators = [charinput_validation])
    phone_number = models.CharField(max_length = 12, validators = [phone_validation])

    # Manager name
    user_extended_manager = models.Manager() 

    def __str__(self):
        return str(self.user)

    class Meta:
        db_table = 'Extended'
        verbose_name_plural = 'Extended'

