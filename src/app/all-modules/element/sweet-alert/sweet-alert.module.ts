import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetAlertRoutingModule } from './sweet-alert-routing.module';
import { SweetAlertComponent } from './sweet-alert.component';


@NgModule({
  declarations: [
    SweetAlertComponent
  ],
  imports: [
    CommonModule,
    SweetAlertRoutingModule,
  ]
})
export class SweetAlertModule { }
