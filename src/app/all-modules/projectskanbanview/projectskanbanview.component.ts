import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index';
@Component({
  selector: 'app-projectskanbanview',
  templateUrl: './projectskanbanview.component.html',
  styleUrls: ['./projectskanbanview.component.scss']
})
export class ProjectskanbanviewComponent implements OnInit {
  public routes = routes;
  constructor() { }

  ngOnInit() {

  }

}
