import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormvalidationComponent } from './formvalidation.component';

const routes: Routes = [
  {
    path: "",
    component: FormvalidationComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormvalidationRoutingModule { }
