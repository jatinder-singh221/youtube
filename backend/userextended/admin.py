from django.contrib import admin
from .models import user_extended

@admin.register(user_extended)
class user_extended_admin(admin.ModelAdmin):
    list_display = ['user', 'date_of_birth', 'address', 'country','phone_number']
    list_display_links = ['user', 'country']
