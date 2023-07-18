import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadskanbanviewRoutingModule } from './leadskanbanview-routing.module';
import { LeadskanbanviewComponent } from './leadskanbanview.component';


@NgModule({
  declarations: [LeadskanbanviewComponent],
  imports: [
    CommonModule,
    LeadskanbanviewRoutingModule
  ]
})
export class LeadskanbanviewModule { }
