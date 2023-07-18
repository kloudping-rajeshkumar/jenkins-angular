import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsdashboardComponent } from './projectsdashboard.component';

describe('ProjectsdashboardComponent', () => {
  let component: ProjectsdashboardComponent;
  let fixture: ComponentFixture<ProjectsdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
