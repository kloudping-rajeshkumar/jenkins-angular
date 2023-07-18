import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-typicons',
  templateUrl: './typicons.component.html',
  styleUrls: ['./typicons.component.scss']
})
export class TypiconsComponent implements OnInit {
  public routes = routes;

  constructor() { }

  ngOnInit(): void {
   
  }

}
