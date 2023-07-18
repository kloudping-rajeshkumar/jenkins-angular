import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankpageRoutingModule } from './blankpage-routing.module';
import { BlankpageComponent } from './blankpage.component';


@NgModule({
  declarations: [BlankpageComponent],
  imports: [
    CommonModule,
    BlankpageRoutingModule
  ]
})
export class BlankpageModule { }
