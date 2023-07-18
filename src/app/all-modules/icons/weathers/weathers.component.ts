import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-weathers',
  templateUrl: './weathers.component.html',
  styleUrls: ['./weathers.component.scss']
})
export class WeathersComponent implements OnInit {
  public routes = routes;

  constructor() { }

  ngOnInit(): void {
   
  }

}
