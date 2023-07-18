import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealsdashboardRoutingModule } from './dealsdashboard-routing.module';
import { DealsdashboardComponent } from './dealsdashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  declarations: [
    DealsdashboardComponent
  ],
  imports: [
    CommonModule,
    DealsdashboardRoutingModule,
    SharedModule,
    NgApexchartsModule
  ]
})
export class DealsdashboardModule { }
