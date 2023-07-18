import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormhorizontalComponent } from './formhorizontal.component';

const routes: Routes = [
  {
    path: "",
    component: FormhorizontalComponent,
    
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormhorizontalRoutingModule { }
