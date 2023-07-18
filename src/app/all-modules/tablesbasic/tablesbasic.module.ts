import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesbasicRoutingModule } from './tablesbasic-routing.module';
import { TablesbasicComponent } from './tablesbasic.component';


@NgModule({
  declarations: [TablesbasicComponent],
  imports: [
    CommonModule,
    TablesbasicRoutingModule
  ]
})
export class TablesbasicModule { }
