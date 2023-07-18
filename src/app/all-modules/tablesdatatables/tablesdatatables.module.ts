import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesdatatablesRoutingModule } from './tablesdatatables-routing.module';
import { TablesdatatablesComponent } from './tablesdatatables.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TablesdatatablesComponent],
  imports: [
    CommonModule,
    TablesdatatablesRoutingModule,
    SharedModule
  ]
})
export class TablesdatatablesModule { }
