import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-horizontal-timeline',
  templateUrl: './horizontal-timeline.component.html',
  styleUrls: ['./horizontal-timeline.component.scss']
})
export class HorizontalTimelineComponent implements OnInit {
  public routes = routes;
  public dates: Array<any> = [
    '12 Jan',
    '10 Feb',
    '22 Mar',
    '28 Apr',
    '02 May',
    '28 Jun',
    '04 Jul',
  ];
  constructor() { }

  ngOnInit(): void {
  }
 
}
