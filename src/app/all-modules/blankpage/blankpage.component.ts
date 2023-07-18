import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index'

@Component({
    selector: 'app-blankpage',
    templateUrl: './blankpage.component.html',
    styleUrls: ['./blankpage.component.scss'],
})
export class BlankpageComponent implements OnInit {
  public routes = routes;

    constructor() { }

    ngOnInit() { }
}
