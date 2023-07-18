import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsComponent } from './leads.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [LeadsComponent],
  imports: [
    CommonModule,
    LeadsRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class LeadsModule { }
