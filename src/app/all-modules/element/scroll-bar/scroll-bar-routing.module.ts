import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrollBarComponent } from './scroll-bar.component';

const routes: Routes = [{ path: '', component: ScrollBarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrollBarRoutingModule { }
