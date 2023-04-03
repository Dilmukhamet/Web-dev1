from django.urls import path
from . import views


urlpatterns = [
    path('time/', views.current_time, name='main'),
    path('products/', views.products, name='main'),
    path('products/<int:id>', views.detail, name='main'),
    path('categories', views.categories, name='main'),
    path('categories/<int:id>', views.category, name='main'),
    path('categories/<int:id>/products', views.products_by_category, name='main')
]