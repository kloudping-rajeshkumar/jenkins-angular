import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-fontawesomes',
  templateUrl: './fontawesomes.component.html',
  styleUrls: ['./fontawesomes.component.scss']
})
export class FontawesomesComponent implements OnInit {
  public routes = routes;
  constructor() { }

  ngOnInit(): void {
  
  }

}
