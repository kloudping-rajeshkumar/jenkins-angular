import { formatDate } from '@angular/common';
import { Guid } from 'guid-typescript';
export class EmailTrigger {
  id: string;
  triggerName: string;
  templateName: string;
  cronExpression: string;
  fromEmail: string;
  emailTo: string[];
  emailCc: string[];
  emailBcc: string[];
  templateID: string;
  saveToSendItems: string;
  emailMonitor: string;
  signatureName: string;
  constructor(emailtrigger: any) {
    {


      this.id = emailtrigger.id || '00000000-0000-0000-0000-000000000000';
      this.triggerName = emailtrigger.triggerName || '';
      this.templateName= emailtrigger.templateName || '';
      this.templateID= emailtrigger.templateID || '';
      this.cronExpression = emailtrigger.cronExpression || '';
      this.fromEmail = emailtrigger.fromEmail || '';
      this.emailTo = emailtrigger.emailTo || '';
      this.emailCc = emailtrigger.emailCc || '';
      this.emailBcc = emailtrigger.emailBcc || '';
      this.signatureName = emailtrigger.signatureName || '';
      this.saveToSendItems = emailtrigger.saveToSendItems || false;
      this.emailMonitor = emailtrigger.emialMonitor || false;


      


    }
  }

}
