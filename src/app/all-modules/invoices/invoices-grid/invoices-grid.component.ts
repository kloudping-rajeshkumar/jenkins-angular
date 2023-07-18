import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
import { DataService } from "src/app/shared/data/data.service";
@Component({
  selector: 'app-invoices-grid',
  templateUrl: './invoices-grid.component.html',
  styleUrls: ['./invoices-grid.component.scss']
})
export class InvoicesGridComponent implements OnInit {
  select_box_open: any = [];

  public routes = routes;
  public invoicesGrid : any = [];
  public url: any = "invoicesGrid";


  constructor(private data: DataService) { 
    this.invoicesGrid = this.data.invoicesGrid;
  }

  ngOnInit(): void {

  }
  public openBox(val: string): void {
    if (this.select_box_open[0] != val) {
      this.select_box_open[0] = val;
    } else {
      this.select_box_open = [];
    }
  }
}
