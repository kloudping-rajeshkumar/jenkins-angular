import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CounterComponent,
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    FormsModule
  ]
})
export class CounterModule { }
