from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import datetime
from .models import Product, Category
from django.core import serializers


def current_time(request):
    now = datetime.datetime.now()
    html = "<html><body>It is now %s.</body></html>" % now
    return HttpResponse(html)

def products(response):
    #SomeModel_json = serializers.serialize("json", Product.objects.all())
    #data = {"Products": SomeModel_json}
    data = list(Product.objects.values())
    return JsonResponse(data, safe=False)

def detail(request, id):
    data = Product.objects.filter(id=id).values()
    return JsonResponse(list(data)[0], safe=False)

def categories(response):
    data = Category.objects.all().values()
    return JsonResponse(list(data), safe=False)

def category(request, id):
    data = Category.objects.filter(id=id).values()
    return JsonResponse(list(data)[0], safe=False)

def products_by_category(request, id):
    data = Category.objects.get(id=id).products.all().values()
    return JsonResponse(list(data), safe=False)