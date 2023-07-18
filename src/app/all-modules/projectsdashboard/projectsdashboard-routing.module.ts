import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsdashboardComponent } from './projectsdashboard.component';

const routes: Routes = [
  {
    path: "",
    component: ProjectsdashboardComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsdashboardRoutingModule { }
