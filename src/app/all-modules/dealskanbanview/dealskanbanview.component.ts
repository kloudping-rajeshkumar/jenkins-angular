import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index';
@Component({
  selector: 'app-dealskanbanview',
  templateUrl: './dealskanbanview.component.html',
  styleUrls: ['./dealskanbanview.component.scss']
})
export class DealskanbanviewComponent implements OnInit {
  public routes = routes;
  constructor() { }

  ngOnInit() {
	
  }

}
