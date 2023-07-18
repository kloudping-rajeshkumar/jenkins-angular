import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormmaskRoutingModule } from './formmask-routing.module';
import { FormmaskComponent } from './formmask.component';


@NgModule({
  declarations: [FormmaskComponent],
  imports: [
    CommonModule,
    FormmaskRoutingModule
  ]
})
export class FormmaskModule { }
