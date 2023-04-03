from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255, null=False)

class Product(models.Model):
    name = models.CharField(max_length=255, null=False)
    price = models.FloatField(default=0, null=False)
    description = models.TextField(default='', null=True)
    count = models.IntegerField(default=0, null=False)
    is_active = models.BooleanField(default=False)
    category = models.ForeignKey(to=Category, on_delete=models.CASCADE, related_name='products')


# Create your models here.
