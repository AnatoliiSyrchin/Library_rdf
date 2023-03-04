from django.db import models


class Author(models.Model):
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    birthday = models.PositiveIntegerField()

    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name}"


class Biography(models.Model):
    text = models.TextField(null=True, blank=True)
    author = models.OneToOneField(Author, on_delete=models.CASCADE)


class Book(models.Model):
    name = models.CharField(max_length=128)
    authors = models.ManyToManyField(Author)
