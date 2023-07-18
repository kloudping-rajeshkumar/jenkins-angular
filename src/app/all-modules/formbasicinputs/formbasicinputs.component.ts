import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index';

@Component({
  selector: 'app-formbasicinputs',
  templateUrl: './formbasicinputs.component.html',
  styleUrls: ['./formbasicinputs.component.scss']
})
export class FormbasicinputsComponent implements OnInit {
  public routes = routes;
  constructor() { }

    ngOnInit() {
 
  }
}
