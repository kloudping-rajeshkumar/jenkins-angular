import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailviewRoutingModule } from './mailview-routing.module';
import { MailviewComponent } from './mailview.component';
import { SharedModule } from 'src/app/shared/shared.module';
 


@NgModule({
  declarations: [MailviewComponent],
  imports: [
    CommonModule,
    MailviewRoutingModule,
    SharedModule
  ]
})
export class MailviewModule { }
