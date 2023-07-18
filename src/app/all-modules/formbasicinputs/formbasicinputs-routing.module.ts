import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormbasicinputsComponent } from './formbasicinputs.component';

const routes: Routes = [
  {
    path: "",
    component: FormbasicinputsComponent,
    
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormbasicinputsRoutingModule { }
