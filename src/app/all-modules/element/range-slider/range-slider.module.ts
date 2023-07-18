import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RangeSliderRoutingModule } from './range-slider-routing.module';
import { RangeSliderComponent } from './range-slider.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';


@NgModule({
  declarations: [
    RangeSliderComponent
  ],
  imports: [
    CommonModule,
    RangeSliderRoutingModule,
    NgxSliderModule
  ]
})
export class RangeSliderModule { }
