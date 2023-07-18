import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesdatatablesComponent } from './tablesdatatables.component';

const routes: Routes = [
  {
    path: "",
    component: TablesdatatablesComponent,
    
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesdatatablesRoutingModule { }
