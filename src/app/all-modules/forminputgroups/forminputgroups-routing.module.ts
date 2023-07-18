import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForminputgroupsComponent } from './forminputgroups.component';

const routes: Routes = [
  {
    path: "",
    component: ForminputgroupsComponent,
    
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForminputgroupsRoutingModule { }
