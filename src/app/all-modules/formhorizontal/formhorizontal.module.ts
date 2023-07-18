import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormhorizontalRoutingModule } from './formhorizontal-routing.module';
import { FormhorizontalComponent } from './formhorizontal.component';
import { SharedModule } from "src/app/shared/shared.module";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [FormhorizontalComponent],
  imports: [
    CommonModule,
    FormhorizontalRoutingModule,
    SharedModule,
    MatSelectModule,
    MatFormFieldModule
  ]
})
export class FormhorizontalModule { }
