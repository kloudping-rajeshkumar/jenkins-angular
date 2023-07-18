import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectskanbanviewRoutingModule } from './projectskanbanview-routing.module';
import { ProjectskanbanviewComponent } from './projectskanbanview.component';


@NgModule({
  declarations: [ProjectskanbanviewComponent],
  imports: [
    CommonModule,
    ProjectskanbanviewRoutingModule
  ]
})
export class ProjectskanbanviewModule { }
