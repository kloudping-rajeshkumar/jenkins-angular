import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-simplelines',
  templateUrl: './simplelines.component.html',
  styleUrls: ['./simplelines.component.scss']
})
export class SimplelinesComponent implements OnInit {
  public routes = routes;
  constructor() { }

  ngOnInit(): void {
    
  }

}
