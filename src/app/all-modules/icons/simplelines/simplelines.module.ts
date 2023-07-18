import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimplelinesRoutingModule } from './simplelines-routing.module';
import { SimplelinesComponent } from './simplelines.component';


@NgModule({
  declarations: [
    SimplelinesComponent
  ],
  imports: [
    CommonModule,
    SimplelinesRoutingModule
  ]
})
export class SimplelinesModule { }
