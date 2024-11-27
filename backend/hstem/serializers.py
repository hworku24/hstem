from rest_framework import serializers
from .models import Author, Creates, Project, File


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ["name", "major", "year"]


class CreatesSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(source="name", read_only=True)

    class Meta:
        model = Creates
        fields = ["author"]


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ["title", "description"]


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = ["is_public", "type", "file"]
