import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsdashboardRoutingModule } from './leadsdashboard-routing.module';
import { LeadsdashboardComponent } from './leadsdashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [LeadsdashboardComponent],
  imports: [
    CommonModule,
    LeadsdashboardRoutingModule,
    NgApexchartsModule
  ]
})
export class LeadsdashboardModule { }
