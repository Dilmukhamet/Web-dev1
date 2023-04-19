import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { CompanydetailComponent } from './companydetail/companydetail.component';


const routes: Routes = [
  { path: "", redirectTo: "/companies", pathMatch: "full"},
  { path: 'companies/:id', component: CompanydetailComponent },
  { path: "companies", component: CompaniesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }