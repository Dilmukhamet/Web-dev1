from django.urls import path
from . import views

urlpatterns = [
    path('api/companies/', views.companies, name='api'),
    path('api/companies/<int:id>', views.company_by_id, name='api'),
    path('api/vacancies', views.vacancies, name='api'),
    path('api/vacancies/<int:id>', views.vacancies_by_id, name='api'),
    path('api/vacancies/top_ten', views.topten_vacancies, name='api'),
    path('api/companies/<int:id>/vacancies', views.vacancies_by_company, name='api')
]