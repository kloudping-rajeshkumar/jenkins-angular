import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-tablesbasic',
  templateUrl: './tablesbasic.component.html',
  styleUrls: ['./tablesbasic.component.scss']
})
export class TablesbasicComponent implements OnInit {
  public routes = routes;
  constructor() { }
    ngOnInit() {
  
  }

}
