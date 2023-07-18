import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealskanbanviewComponent } from './dealskanbanview.component';

describe('DealskanbanviewComponent', () => {
  let component: DealskanbanviewComponent;
  let fixture: ComponentFixture<DealskanbanviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealskanbanviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealskanbanviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
