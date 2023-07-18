import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplatesComponent } from './templates.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'src/app/shared/shared.module';
import {UploadFilesComponent} from '../shared/file-uploads/file-upload.component'


@NgModule({
  declarations: [TemplatesComponent,UploadFilesComponent],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    NgxPaginationModule,
    SharedModule
  ]
})
export class TemplatesModule { }
