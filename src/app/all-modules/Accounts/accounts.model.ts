import { formatDate } from '@angular/common';
import { Guid } from 'guid-typescript';
export class Account {
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
  constructor(account: any) {
    {
      this.id = account.id || '00000000-0000-0000-0000-000000000000';
      this.prefix = account.prefix || '';
      this.firstname = account.firstname || '';
      this.lastname = account.lastname || '';
      this.organization = account.organization || '';
      this.title = account.title || '';
      this.email = account.email || '';
      this.phone = account.phone || '';
      this.homePhone = account.homePhone || '';
      this.mobilePhone = account.mobilePhone || '';
      this.fax = account.fax || '';
      this.otherPhone = account.otherPhone || '';
      this.assistantPhone = account.assistantPhone || '';
      this.assistantName = account.assistantName || '';
      this.linkedin = account.linkedin || '';

      this.facebook = account.facebook || '';
      this.twitter = account.twitter || '';
      this.address = account.address || '';
      this.city = account.city || '';
      this.otherAddress = account.otherAddress || '';

      this.state = account.state || '';
      this.country = account.country || '';
      this.postcode = account.postcode || '';
      this.dueDate = account.dueDate ||  null ;
      this.birthday = account.birthday|| null ;

      this.description = account.description || '';
      this.permission = account.permission || '';
      this.otherCountry = account.otherCountry || '';
      this.otherCity = account.otherCity || '';
      this.otherState = account.otherState || '';
      this.otherPostcode = account.otherPostcode || '';


    }
  }

}
