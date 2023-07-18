import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index';
import { SharedModule } from "src/app/shared/shared.module";
@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.scss']
})
export class AddInvoiceComponent implements OnInit {
  public routes = routes;
  select_box_open: any = [];
  public invoiceArray: any = [1];
  public serviceArray: any = [0];
  public discountArray: any = [0];
  recurring : boolean = false;
  recurringText: boolean = false;
  
  constructor() { }
  ngOnInit(): void {

    
  }
  public addItem():void {
    this.invoiceArray.push(1)
  }
  public deleteItem(index:any):void {
    this.invoiceArray.splice(index, 1)
  }
  public addService():void {
    this.serviceArray.push(1)
  }
  public deleteService(index:any):void {
    this.serviceArray.splice(index, 1)
  }
  public addDiscount():void {
    this.discountArray.push(1)
  }
  public deleteDiscount(index:any):void {
    this.discountArray.splice(index, 1)
  }
  public openBox(val: string): void {
    if (this.select_box_open[0] != val) {
      this.select_box_open[0] = val;
    } else {
      this.select_box_open = [];
    }
  }
  showRecurring(){
    this.recurring = !this.recurring
  }
  showRecurringText(){
    this.recurringText = !this.recurringText;
  }
}

  
