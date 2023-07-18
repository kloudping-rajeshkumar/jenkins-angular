import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadskanbanviewComponent } from './leadskanbanview.component';

const routes: Routes = [
  {
    path: "",
    component: LeadskanbanviewComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadskanbanviewRoutingModule { }
