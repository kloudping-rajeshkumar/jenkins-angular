import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-formhorizontal',
  templateUrl: './formhorizontal.component.html',
  styleUrls: ['./formhorizontal.component.scss']
})
export class FormhorizontalComponent implements OnInit {
  foods: Food[] = [
    {value: 'A+-1', viewValue: 'A+'},
    {value: 'O+-2', viewValue: 'O+'},
    {value: 'B+-3', viewValue: 'B+'},
    {value: 'AB+-4', viewValue: 'AB+'},
  ];
  public routes = routes;
  constructor() { }

 
 ngOnInit() {
  
  }

}
