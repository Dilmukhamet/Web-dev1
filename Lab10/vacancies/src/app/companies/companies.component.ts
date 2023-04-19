import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Company } from '../interfaces';
import { ResthttpService } from '../resthttp.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit{
  companies : Company[] = []
  constructor(private api: ResthttpService){}

  ngOnInit() {
    console = console

    this.api.getCompanies().subscribe((res)=>{
      this.companies = res
      //console.log(this.companies)
    })


    /*this.api.getCompnies().subscribe((data: any)=>{
      this.companies = JSON.parse(JSON.stringify(data))
      console.log(this.companies)
      for (let temp of this.companies){
        let company = new Company(temp.id, temp.name, temp.description, temp.city, temp.address)
        this.companies.push(company)
      }*/
    }

     
}

  
