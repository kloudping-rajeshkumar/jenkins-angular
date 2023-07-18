import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index';

@Component({
  selector: 'app-formvertical',
  templateUrl: './formvertical.component.html',
  styleUrls: ['./formvertical.component.scss']
})
export class FormverticalComponent implements OnInit {
  public routes = routes;
  constructor() { }

   
    ngOnInit() {
  
  }

}
