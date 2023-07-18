import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-feathers',
  templateUrl: './feathers.component.html',
  styleUrls: ['./feathers.component.scss']
})
export class FeathersComponent implements OnInit {
  public routes = routes;
  constructor() { }

  ngOnInit(): void {
   
  }

}
