import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-ionic',
  templateUrl: './ionic.component.html',
  styleUrls: ['./ionic.component.scss']
})
export class IonicComponent implements OnInit {
  public routes = routes;
  constructor() { }

  ngOnInit(): void {
  
  }

}
