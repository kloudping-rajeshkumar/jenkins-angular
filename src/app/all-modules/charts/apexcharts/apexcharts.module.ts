import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApexchartsRoutingModule } from './apexcharts-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexchartsComponent } from './apexcharts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ApexchartsComponent],
  imports: [CommonModule, 
    ApexchartsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule],
})
export class ApexchartsModule {}
