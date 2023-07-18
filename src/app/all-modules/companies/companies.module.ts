import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesComponent } from './companies.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination'


@NgModule({
  declarations: [CompaniesComponent],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
     SharedModule,
     NgxPaginationModule
  ]
})
export class CompaniesModule { }
