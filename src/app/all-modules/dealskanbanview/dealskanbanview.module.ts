import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealskanbanviewRoutingModule } from './dealskanbanview-routing.module';
import { DealskanbanviewComponent } from './dealskanbanview.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [DealskanbanviewComponent],
  imports: [
    CommonModule,
    DealskanbanviewRoutingModule,
    SharedModule
  ]
})
export class DealskanbanviewModule { }
