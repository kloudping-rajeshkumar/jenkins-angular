import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  public routes = routes;
  constructor() { }

  ngOnInit() {
 
  }

}
