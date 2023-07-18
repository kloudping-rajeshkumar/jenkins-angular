import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplelinesComponent } from './simplelines.component';

describe('SimplelinesComponent', () => {
  let component: SimplelinesComponent;
  let fixture: ComponentFixture<SimplelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplelinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
