import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DraganddropComponent } from './draganddrop.component';

const routes: Routes = [{ path: '', component: DraganddropComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DraganddropRoutingModule { }
