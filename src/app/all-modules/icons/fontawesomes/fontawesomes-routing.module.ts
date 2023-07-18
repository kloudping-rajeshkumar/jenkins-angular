import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontawesomesComponent } from './fontawesomes.component';

const routes: Routes = [{ path: '', component: FontawesomesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FontawesomesRoutingModule { }
