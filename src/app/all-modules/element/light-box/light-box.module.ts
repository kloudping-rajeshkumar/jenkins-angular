import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightBoxRoutingModule } from './light-box-routing.module';
import { LightBoxComponent } from './light-box.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LightBoxComponent
  ],
  imports: [
    CommonModule,
    LightBoxRoutingModule,
    SharedModule
  ]
})
export class LightBoxModule { }
