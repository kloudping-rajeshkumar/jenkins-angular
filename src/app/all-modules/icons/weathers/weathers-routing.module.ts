import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeathersComponent } from './weathers.component';

const routes: Routes = [{ path: '', component: WeathersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeathersRoutingModule { }
