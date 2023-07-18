import { formatDate } from '@angular/common';
import { Guid } from 'guid-typescript';
export class Signature {
  id: string;
 
  name: string;
  body: string;

  fromEmail: string;

  
 
  constructor(signature: any) {
    {
      this.id = signature.id || '00000000-0000-0000-0000-000000000000';
     
      this.name = signature.name || '';
      this.body = signature.body || '';
  
      this.fromEmail = signature.fromEmail || '';
     
    }
  }

}
