import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormvalidationRoutingModule } from './formvalidation-routing.module';
import { FormvalidationComponent } from './formvalidation.component';


@NgModule({
  declarations: [FormvalidationComponent],
  imports: [
    CommonModule,
    FormvalidationRoutingModule
  ]
})
export class FormvalidationModule { }
