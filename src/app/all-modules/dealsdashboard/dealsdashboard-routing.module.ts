import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealsdashboardComponent } from './dealsdashboard.component';

const routes: Routes = [{ path: '', component: DealsdashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealsdashboardRoutingModule { }
