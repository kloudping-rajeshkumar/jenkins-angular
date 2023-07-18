import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error500Component } from './all-modules/error500/error500.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import(`./all-modules/all-modules.module`).then(
        (m) => m.AllModulesModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
