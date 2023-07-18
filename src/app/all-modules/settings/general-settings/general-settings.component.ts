import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss']
})
export class GeneralSettingsComponent implements OnInit {
  deleteIcon1:boolean = true;
  deleteIcon2:boolean = true;
  public routes = routes;
  constructor() { }
  deleteIconOne(){
    this.deleteIcon1 = !this.deleteIcon1; 
  }
  deleteIconTwo(){
    this.deleteIcon2 = !this.deleteIcon2; 
  }
  ngOnInit(): void {
   
  }

}
