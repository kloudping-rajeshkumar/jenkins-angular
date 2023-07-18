import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignatureComponent } from './signature/signature.component'
import { EmailTriggerComponent } from './email-trigger/email-trigger.component'
import { EmailsComponent } from './emails.component';
import {QuickEmailComponent} from './quick-email/quick-email.component';
const routes: Routes = [
  {path:'',component:EmailsComponent,
  children:[
  {path: 'email-trigger', component: EmailTriggerComponent },
  {path: 'quick-email', component: QuickEmailComponent },
  {path: 'signature', component: SignatureComponent },

  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailsRoutingModule { }
