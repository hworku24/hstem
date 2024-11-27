from django.urls import path
from .views import AuthorList, CreatesList, ProjectList


urlpatterns = [
    path("authors/", AuthorList.as_view(), name="author_list"),
    path("details/", CreatesList.as_view(), name="creates_list"),
    path("projects/", ProjectList.as_view(), name="project_list"),
]
