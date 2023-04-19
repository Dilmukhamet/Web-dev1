export class Company {
    id : number;
    name : string;
    description : string;
    city : string;
    address : string;
    constructor(i: number, n: string, d: string, c: string, a: string ){
        this.id = i;
        this.name = n;
        this.description = d;
        this.city = c;
        this.address = a;
    }
} 

export class Vacancies {
    name : string;
    description : string;
    salary : number;
    company : number;
    constructor(n: string, d: string, s: number, c: number){
        this.name = n;
        this.description = d;
        this.salary = s;
        this.company = c;
    }
}