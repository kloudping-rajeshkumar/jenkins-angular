import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormverticalComponent } from './formvertical.component';

const routes: Routes = [
  {
    path: "",
    component: FormverticalComponent,
    
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormverticalRoutingModule { }
