import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraganddropRoutingModule } from './draganddrop-routing.module';
import { DraganddropComponent } from './draganddrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    DraganddropComponent
  ],
  imports: [
    CommonModule,
    DraganddropRoutingModule,
    DragDropModule
  ]
})
export class DraganddropModule { }
