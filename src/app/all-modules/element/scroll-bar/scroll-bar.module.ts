import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollBarRoutingModule } from './scroll-bar-routing.module';
import { ScrollBarComponent } from './scroll-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ScrollBarComponent
  ],
  imports: [
    CommonModule,
    ScrollBarRoutingModule,
    SharedModule
  ]
})
export class ScrollBarModule { }
