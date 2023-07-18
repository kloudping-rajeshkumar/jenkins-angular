import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectskanbanviewComponent } from './projectskanbanview.component';

describe('ProjectskanbanviewComponent', () => {
  let component: ProjectskanbanviewComponent;
  let fixture: ComponentFixture<ProjectskanbanviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectskanbanviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectskanbanviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
