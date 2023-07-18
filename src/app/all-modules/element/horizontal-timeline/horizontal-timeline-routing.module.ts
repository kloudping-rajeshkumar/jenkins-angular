import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorizontalTimelineComponent } from './horizontal-timeline.component';

const routes: Routes = [{ path: '', component: HorizontalTimelineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorizontalTimelineRoutingModule { }
