import { formatDate } from '@angular/common';
import { Guid } from 'guid-typescript';
export class Company {
  id: string;
  
 
  organizationName: string; 
  phone: string;
  fax: string;
  website: string; 
  linkedin: string;
  facebook: string;
  twitter: string;
  emailDomains: string; 
  billingAddress: string; 
  billingCity: string;
  billingState: string;
  billingCountry: string;
  billingPostcode: string;
  shippingAddress: string;
  shippingCity: string;
  shippingState: string;
  shippingCountry: string;
  shippingPostcode: string;
  datesToRemember: string;
  description: string;
  constructor(company:any) {
    {
      this.id = company.id ||  '00000000-0000-0000-0000-000000000000';
      this.organizationName = company.organizationName || '';
      this.website = company.website  || '' ;
      this.emailDomains = company.emailDomains || '';
      this.billingAddress = company.billingAddress || '';
      this.billingCity = company.billingCity || '';
      this.phone = company.phone || '';
      this.billingState = company.billingState || '';
      this.billingCountry = company.billingCountry || '';
      this.fax = company.fax || '';
      this.billingPostcode = company.billingPostcode || '';
      this.shippingAddress = company.shippingAddress || '';
      this.shippingCity = company.shippingCity || '';
      this.linkedin = company.linkedin || '';

      this.facebook = company.facebook || '';
      this.twitter = company.twitter || '';
      this.shippingState = company.shippingState || '';
      this.shippingCountry = company.shippingCountry || '';
      this.shippingPostcode = company.shippingPostcode || '';

      this.datesToRemember = company.datesToRemember || '';
      this.description = company.description || '';
     
      
    
    }
  }
  
}
