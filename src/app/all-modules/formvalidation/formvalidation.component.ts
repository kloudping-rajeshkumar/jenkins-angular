import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index';
@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.scss']
})
export class FormvalidationComponent implements OnInit {
  public routes = routes;
  constructor() { }

  ngOnInit() {
 
  }

}
