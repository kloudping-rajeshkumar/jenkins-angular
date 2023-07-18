import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorizontalTimelineRoutingModule } from './horizontal-timeline-routing.module';
import { HorizontalTimelineComponent } from './horizontal-timeline.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HorizontalTimelineComponent
  ],
  imports: [
    CommonModule,
    HorizontalTimelineRoutingModule,
    SharedModule
  ]
})
export class HorizontalTimelineModule { }
