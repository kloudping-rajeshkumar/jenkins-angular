import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StickyNotesRoutingModule } from './sticky-notes-routing.module';
import { StickyNotesComponent } from './sticky-notes.component';


@NgModule({
  declarations: [
    StickyNotesComponent
  ],
  imports: [
    CommonModule,
    StickyNotesRoutingModule
  ]
})
export class StickyNotesModule { }
