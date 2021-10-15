from django.db import models

class ad_creation(models.Model):
    video = models.FileField(upload_to = 'ad/%y')
    link = models.URLField(max_length = 225)
    date = models.DateField(auto_now_add = True)

    def __str__(self):
        return str(self.link)
