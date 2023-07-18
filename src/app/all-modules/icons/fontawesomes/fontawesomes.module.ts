import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontawesomesRoutingModule } from './fontawesomes-routing.module';
import { FontawesomesComponent } from './fontawesomes.component';


@NgModule({
  declarations: [
    FontawesomesComponent
  ],
  imports: [
    CommonModule,
    FontawesomesRoutingModule
  ]
})
export class FontawesomesModule { }
