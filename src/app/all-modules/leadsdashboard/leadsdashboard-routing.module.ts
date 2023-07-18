import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadsdashboardComponent } from './leadsdashboard.component';

const routes: Routes = [
  {
    path: "",
    component: LeadsdashboardComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadsdashboardRoutingModule { }
