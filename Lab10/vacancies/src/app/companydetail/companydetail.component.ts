import { Component } from '@angular/core';
import { Company, Vacancies } from '../interfaces';
import { ActivatedRoute } from '@angular/router';
import { ResthttpService } from '../resthttp.service';
@Component({
  selector: 'app-companydetail',
  templateUrl: './companydetail.component.html',
  styleUrls: ['./companydetail.component.css']
})
export class CompanydetailComponent {
  company : Company | undefined;
  vacancies : Vacancies[] = []
  constructor(private route: ActivatedRoute, private api: ResthttpService) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const companyIdFromRoute = Number(routeParams.get('id'));
    console = console
    
    /*this.api.getCompanies().subscribe((res)=>{
      this.company = res
      //console.log(this.company)
    })*/
    this.api.getCompanyById(companyIdFromRoute).subscribe((res)=>{
      this.company = res
      //console.log(this.company)
    })
    this.api.getVacanciesByCompany(companyIdFromRoute).subscribe((res)=>{
      this.vacancies = res
      //console.log(this.vacancies)
    })
  }
}

