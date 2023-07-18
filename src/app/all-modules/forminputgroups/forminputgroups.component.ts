import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index';

@Component({
  selector: 'app-forminputgroups',
  templateUrl: './forminputgroups.component.html',
  styleUrls: ['./forminputgroups.component.scss']
})
export class ForminputgroupsComponent implements OnInit {
  public routes = routes;
  constructor() { }

   
    ngOnInit() {
 
  }

}
