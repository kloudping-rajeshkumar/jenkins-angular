import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index';
@Component({
  selector: 'app-privacypolicy',
  templateUrl: './privacypolicy.component.html',
  styleUrls: ['./privacypolicy.component.scss']
})
export class PrivacypolicyComponent implements OnInit {
  public routes = routes;
  constructor() { }

  ngOnInit() {
 
  }

}
