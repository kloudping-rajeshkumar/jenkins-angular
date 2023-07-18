import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StickyNotesComponent } from './sticky-notes.component';

const routes: Routes = [{ path: '', component: StickyNotesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StickyNotesRoutingModule { }
