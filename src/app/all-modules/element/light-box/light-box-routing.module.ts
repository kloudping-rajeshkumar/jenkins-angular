import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LightBoxComponent } from './light-box.component';

const routes: Routes = [{ path: '', component: LightBoxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LightBoxRoutingModule { }
