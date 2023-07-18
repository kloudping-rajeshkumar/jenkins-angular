import { formatDate } from '@angular/common';
import { Guid } from 'guid-typescript';
export class Leads {
  id: string;  

  
  prefix: string;
  firstname: string;
  lastname: string;
  organization: string;
  status: string;
  user: string; 
  rating: string;
  email: string;
  phone: string; 
  mobilePhone: string; 
  fax: string;
  website: string;
  industry: string;
  employees: string;
  source: string;
  address: string;
  city: string;
  state: string;
  postcode: string;
  title:string;
  country: string;
  description:string;
  constructor(leads:any) {
    {
      this.id = leads.id || '00000000-0000-0000-0000-000000000000';
      this.prefix = leads.prefix || '';
      this.firstname = leads.firstname || '';
      this.lastname = leads.lastname  ||  '';
      this.organization = leads.organization  || '' ;
      this.status = leads.status || '';
      this.user = leads.user || '';
      this.rating = leads.rating || '';
      this.email = leads.email || '';
      this.phone = leads.phone || '';
      this.mobilePhone = leads.mobilePhone || '';
      this.fax = leads.fax || '';
      this.website = leads.website || '';
      this.industry = leads.industry || '';
      this.employees = leads.employees || '';
      this.source = leads.source || '';
      this.address = leads.address || '';
      this.city = leads.city || '';
      this.state = leads.state || '';
      this.postcode = leads.postcode || '';
      this.country = leads.country || '';
      this.title = leads.title || '';
      this.description=leads.desvription ||'';
    
    }
  }
  
}
