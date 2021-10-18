from django.db import models
from userextended.validators import charinput_validation

class catagories(models.Model):
    catagory_name = models.CharField(max_length = 225, validators = [charinput_validation])

    def __str__(self):
        return str(self.catagory_name)