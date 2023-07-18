import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmailsRoutingModule } from './emails-routing.module';
import { EmailTriggerComponent } from './email-trigger/email-trigger.component'
import { EmailsComponent } from './emails.component';

import {QuickEmailComponent} from './quick-email/quick-email.component';

import { SignatureComponent } from './signature/signature.component'

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    QuickEmailComponent,
    EmailsComponent,
    EmailTriggerComponent,
    SignatureComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EmailsRoutingModule,
    NgxPaginationModule
  ]
})
export class EmailsModule { }
