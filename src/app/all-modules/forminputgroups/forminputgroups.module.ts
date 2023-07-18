import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForminputgroupsRoutingModule } from './forminputgroups-routing.module';
import { ForminputgroupsComponent } from './forminputgroups.component';


@NgModule({
  declarations: [ForminputgroupsComponent],
  imports: [
    CommonModule,
    ForminputgroupsRoutingModule
  ]
})
export class ForminputgroupsModule { }
