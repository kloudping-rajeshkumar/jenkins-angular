import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeathersRoutingModule } from './weathers-routing.module';
import { WeathersComponent } from './weathers.component';


@NgModule({
  declarations: [
    WeathersComponent
  ],
  imports: [
    CommonModule,
    WeathersRoutingModule
  ]
})
export class WeathersModule { }
