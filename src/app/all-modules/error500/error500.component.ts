import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index'

@Component({
  selector: 'app-error500',
  templateUrl: './error500.component.html',
  styleUrls: ['./error500.component.scss']
})
export class Error500Component implements OnInit {
  public routes = routes;
  constructor() { }

  ngOnInit(): void {
  }

}
