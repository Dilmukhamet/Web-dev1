
from django.http import JsonResponse
from .models import Company, Vacancy

def companies(request):
    return JsonResponse( list(Company.objects.all().values()), safe=False)

def company_by_id(request, id):
    data = Company.objects.filter(id=id).values()
    return JsonResponse(list(data)[0], safe=False)

def vacancies_by_company(request, id):
    data = Company.objects.get(id=id).vacancies.all().values()
    return JsonResponse(list(data), safe=False)

def vacancies(request):
    return JsonResponse(list(Vacancy.objects.all().values()), safe=False)

def vacancies_by_id(request, id):
    data = Vacancy.objects.filter(id=id).values()
    return JsonResponse(list(data)[0], safe=False)

def topten_vacancies(request):
    data = Vacancy.objects.all().order_by('-salary').values()
    return JsonResponse(list(data)[:10], safe=False)