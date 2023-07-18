import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormmaskComponent } from './formmask.component';

const routes: Routes = [
  {
    path: "",
    component: FormmaskComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormmaskRoutingModule { }
