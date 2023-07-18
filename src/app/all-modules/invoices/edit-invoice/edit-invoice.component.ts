import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.scss']
})
export class EditInvoiceComponent implements OnInit {
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
  showRecurring(){
    this.recurring = !this.recurring
  }
  showRecurringText(){
    this.recurringText = !this.recurringText;
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
      console.log('value',this.select_box_open);
      
    } else {
      this.select_box_open = [];
      console.log('value',this.select_box_open);

    }
  }
}
