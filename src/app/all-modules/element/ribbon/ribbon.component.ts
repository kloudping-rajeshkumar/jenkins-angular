import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss']
})
export class RibbonComponent implements OnInit {
  public routes = routes;
  constructor() { }

  ngOnInit(): void {
  }

}
