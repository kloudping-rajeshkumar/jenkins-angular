import { formatDate } from '@angular/common';
import { Guid } from 'guid-typescript';
export class Templates {
  id: string;
  title: string;
  body: string;
  attachements: string;
  category: string;
  enable: string;
  
 
  constructor(addTemplate: any) {
    {
      this.id = addTemplate.id || '00000000-0000-0000-0000-000000000000';
      this.enable=addTemplate.enable;
      this.title = addTemplate.title || '';
      this.body = addTemplate.body || '';
      this.attachements = addTemplate.attachements || '';
      this.category = addTemplate.category || '';
     
    }
  }

}
