import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-tax-settings',
  templateUrl: './tax-settings.component.html',
  styleUrls: ['./tax-settings.component.scss']
})
export class TaxSettingsComponent implements OnInit {
  public routes = routes;
  constructor() { }

  ngOnInit(): void {
  }

}
