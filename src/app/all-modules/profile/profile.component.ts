import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public routes = routes;
  constructor() { }

     ngOnInit() {

  }


}
