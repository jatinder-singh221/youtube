# Generated by Django 3.2.8 on 2021-10-17 17:22

import ads.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ad_creation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('video', models.FileField(upload_to='ad/%y', validators=[ads.validators.video_check])),
                ('link', models.URLField(max_length=225)),
                ('date', models.DateField(auto_now_add=True)),
            ],
        ),
    ]