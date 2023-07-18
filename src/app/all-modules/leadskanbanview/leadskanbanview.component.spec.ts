import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadskanbanviewComponent } from './leadskanbanview.component';

describe('LeadskanbanviewComponent', () => {
  let component: LeadskanbanviewComponent;
  let fixture: ComponentFixture<LeadskanbanviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadskanbanviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadskanbanviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
