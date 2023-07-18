import { formatDate } from '@angular/common';
import { Guid } from 'guid-typescript';
export class Contact {
  id: string;
  prefix: string;
  firstname: string;
  lastname: string;
  organization: string;
  title: string;
  email: string;
  phone: string;
  homePhone: string;
  mobilePhone: string;
  otherPhone: string;
  assistantPhone: string;
  assistantName: string;
  linkedin: string;
  facebook: string;
  twitter: string;
  address: string;
  fax: string;
  city: string;
  state: string;
  country: string;
  postcode: string;
  dueDate: string;
  birthday: string;
  description: string;
  permission: string;
  otherAddress: string;
  otherCity: string;
  otherState: string;
  otherPostcode: string;
  otherCountry: string;
  constructor(contact: any) {
    {
      this.id = contact.id || '00000000-0000-0000-0000-000000000000';
      this.prefix = contact.prefix || '';
      this.firstname = contact.firstname || '';
      this.lastname = contact.lastname || '';
      this.organization = contact.organization || '';
      this.title = contact.title || '';
      this.email = contact.email || '';
      this.phone = contact.phone || '';
      this.homePhone = contact.homePhone || '';
      this.mobilePhone = contact.mobilePhone || '';
      this.fax = contact.fax || '';
      this.otherPhone = contact.otherPhone || '';
      this.assistantPhone = contact.assistantPhone || '';
      this.assistantName = contact.assistantName || '';
      this.linkedin = contact.linkedin || '';

      this.facebook = contact.facebook || '';
      this.twitter = contact.twitter || '';
      this.address = contact.address || '';
      this.city = contact.city || '';
      this.otherAddress = contact.otherAddress || '';

      this.state = contact.state || '';
      this.country = contact.country || '';
      this.postcode = contact.postcode || '';
      this.dueDate = contact.dueDate ||  null ;
      this.birthday = contact.birthday|| null ;

      this.description = contact.description || '';
      this.permission = contact.permission || '';
      this.otherCountry = contact.otherCountry || '';
      this.otherCity = contact.otherCity || '';
      this.otherState = contact.otherState || '';
      this.otherPostcode = contact.otherPostcode || '';


    }
  }

}
