import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index';
@Component({
  selector: 'app-formmask',
  templateUrl: './formmask.component.html',
  styleUrls: ['./formmask.component.scss']
})
export class FormmaskComponent implements OnInit {
  public routes = routes;
  constructor() { }

  ngOnInit() {
 
  }

}
