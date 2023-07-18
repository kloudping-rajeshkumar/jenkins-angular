import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-social-settings',
  templateUrl: './social-settings.component.html',
  styleUrls: ['./social-settings.component.scss']
})
export class SocialSettingsComponent implements OnInit {
  public routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
