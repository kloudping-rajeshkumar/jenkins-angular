import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-email-settings',
  templateUrl: './email-settings.component.html',
  styleUrls: ['./email-settings.component.scss']
})
export class EmailSettingsComponent implements OnInit {
  public routes = routes;
  constructor() { }

  ngOnInit(): void {
  }

}
