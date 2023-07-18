import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-invoices-settings',
  templateUrl: './invoices-settings.component.html',
  styleUrls: ['./invoices-settings.component.scss']
})
export class InvoicesSettingsComponent implements OnInit {
  public routes = routes;
  constructor() { }

  ngOnInit(): void {
  }

}
