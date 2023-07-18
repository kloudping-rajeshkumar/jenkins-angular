import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-bank-settings',
  templateUrl: './bank-settings.component.html',
  styleUrls: ['./bank-settings.component.scss']
})
export class BankSettingsComponent implements OnInit {
  public routes = routes;
  constructor() { }

  ngOnInit(): void {
  }

}
