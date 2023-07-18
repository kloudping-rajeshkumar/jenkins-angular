import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimplelinesComponent } from './simplelines.component';

const routes: Routes = [{ path: '', component: SimplelinesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimplelinesRoutingModule { }
