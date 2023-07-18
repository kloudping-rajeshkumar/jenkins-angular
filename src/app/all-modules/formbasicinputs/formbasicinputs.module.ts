import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormbasicinputsRoutingModule } from './formbasicinputs-routing.module';
import { FormbasicinputsComponent } from './formbasicinputs.component';


@NgModule({
  declarations: [FormbasicinputsComponent],
  imports: [
    CommonModule,
    FormbasicinputsRoutingModule
  ]
})
export class FormbasicinputsModule { }
