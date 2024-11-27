from django.apps import AppConfig


class AuthorConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "author"


class CreatesConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "creates"


class ProjectConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "project"


class FileConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "file"
