import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsdashboardComponent } from './dealsdashboard.component';

describe('DealsdashboardComponent', () => {
  let component: DealsdashboardComponent;
  let fixture: ComponentFixture<DealsdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealsdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
