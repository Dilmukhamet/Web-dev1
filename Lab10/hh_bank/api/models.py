from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=255, null=False)
    description = models.TextField(max_length=255)
    city = models.CharField(max_length=255)
    address = models.TextField(max_length=255)

class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=255)
    salary = models.FloatField(default=0)
    company = models.ForeignKey(to=Company, on_delete=models.CASCADE, related_name='vacancies')

