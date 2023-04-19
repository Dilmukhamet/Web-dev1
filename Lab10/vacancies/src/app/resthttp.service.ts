import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResthttpService {

  constructor(private http: HttpClient) { }
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  getCompanies(): Observable<any>{
    return this.http.get("http://localhost:8000/api/companies/")
  } 
  getCompanyById(id: number) :Observable<any> {
    return this.http.get("http://localhost:8000/api/companies/" + id)
  }
  getVacanciesByCompany(id: number):Observable<any>{
    return this.http.get("http://localhost:8000/api/companies/" + id  + "/vacancies")
  }

}
