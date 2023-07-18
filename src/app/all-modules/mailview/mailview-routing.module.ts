import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailviewComponent } from './mailview.component';

const routes: Routes = [
  {
    path: "",
    component: MailviewComponent,
    
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailviewRoutingModule { }
