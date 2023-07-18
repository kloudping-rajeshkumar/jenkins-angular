import { formatDate } from '@angular/common';
import { Guid } from 'guid-typescript';
export class SocialTrigger {
  id: string;
  triggerName: string;
  templateName: string;
  cronExpression: string;
  fromEmail: string;
  emailTo: string;
  templateID: string;
  saveToSendItems: string;

  constructor(socialTrigger: any) {
    {


      this.id = socialTrigger.id || '00000000-0000-0000-0000-000000000000';
      this.triggerName = socialTrigger.triggerName || '';
      this.templateName= socialTrigger.templateName || '';
      this.templateID= socialTrigger.templateID || '';
      this.cronExpression = socialTrigger.cronExpression || '';
      this.fromEmail = socialTrigger.fromEmail || '';
      this.emailTo = socialTrigger.emailTo || '';
      this.saveToSendItems = socialTrigger.saveToSendItems || false;


      


    }
  }

}
