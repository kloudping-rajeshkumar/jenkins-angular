import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypiconsRoutingModule } from './typicons-routing.module';
import { TypiconsComponent } from './typicons.component';


@NgModule({
  declarations: [
    TypiconsComponent
  ],
  imports: [
    CommonModule,
    TypiconsRoutingModule
  ]
})
export class TypiconsModule { }
