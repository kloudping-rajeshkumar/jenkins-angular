import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsdashboardComponent } from './leadsdashboard.component';

describe('LeadsdashboardComponent', () => {
  let component: LeadsdashboardComponent;
  let fixture: ComponentFixture<LeadsdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadsdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
