import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsdashboardRoutingModule } from './projectsdashboard-routing.module';
import { ProjectsdashboardComponent } from './projectsdashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [ProjectsdashboardComponent],
  imports: [
    CommonModule,
    ProjectsdashboardRoutingModule,
    NgApexchartsModule
  ]
})
export class ProjectsdashboardModule { }
