import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesbasicComponent } from './tablesbasic.component';

const routes: Routes = [
  {
    path: "",
    component: TablesbasicComponent,
    
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesbasicRoutingModule { }
