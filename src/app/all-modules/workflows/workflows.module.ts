import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowsRoutingModule } from './workflows-routing.module';
import { WorkflowsComponent } from './workflows.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [WorkflowsComponent],
  imports: [
    CommonModule,
    WorkflowsRoutingModule,
    NgxPaginationModule,
    SharedModule
  ]
})
export class WorkflowsModule { }
