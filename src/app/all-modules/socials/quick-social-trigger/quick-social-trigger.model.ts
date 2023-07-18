import { formatDate } from '@angular/common';
import { Guid } from 'guid-typescript';
export class QuickSocialTrigger {
  id: string;

  templateName: string;
  fromEmail: string;
  emailTo: string[];
  emailCc: string[];
  emailBcc: string[];
  saveToSendItems: string;
  emailMonitor: string;

  constructor(model: any) {
    {


      this.id = model.id || '00000000-0000-0000-0000-000000000000';
      this.templateName= model.templateName || '';
      this.fromEmail = model.fromEmail || '';
      this.emailTo = model.emailTo || '';
      this.emailCc = model.emailCc || '';
      this.emailBcc = model.emailBcc || '';
      this.saveToSendItems = model.saveToSendItems || false;
      this.emailMonitor = model.emialMonitor || false;


      


    }
  }

}
