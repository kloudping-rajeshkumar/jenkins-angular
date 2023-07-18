import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankpageComponent } from './blankpage.component';

const routes: Routes = [
  {
    path: "",
    component: BlankpageComponent,
    
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlankpageRoutingModule { }
