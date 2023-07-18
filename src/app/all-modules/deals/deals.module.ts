import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealsRoutingModule } from './deals-routing.module';
import { DealsComponent } from './deals.component';
import { SharedModule } from 'src/app/shared/shared.module';
//import { NgxBootstrapModule } from 'src/app/shared/ngx-bootstrap/ngx-bootstrap.module';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [DealsComponent],
  imports: [
    CommonModule,
    DealsRoutingModule,
    SharedModule,
    NgxPaginationModule
   // NgxBootstrapModule
 // NgbModule
  ]
})
export class DealsModule { }
