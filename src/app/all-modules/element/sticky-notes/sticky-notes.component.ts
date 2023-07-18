import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-sticky-notes',
  templateUrl: './sticky-notes.component.html',
  styleUrls: ['./sticky-notes.component.scss']
})
export class StickyNotesComponent implements OnInit {
  public routes = routes;
  constructor() { }

  ngOnInit(): void {
  }
}
