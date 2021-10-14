from django.apps import AppConfig


class UserextendedConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'userextended'

    def ready(self):
        import userextended.signals
