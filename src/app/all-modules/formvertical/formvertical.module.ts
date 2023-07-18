import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormverticalRoutingModule } from './formvertical-routing.module';
import { FormverticalComponent } from './formvertical.component';


@NgModule({
  declarations: [FormverticalComponent],
  imports: [
    CommonModule,
    FormverticalRoutingModule
  ]
})
export class FormverticalModule { }
