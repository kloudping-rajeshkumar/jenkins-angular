import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormverticalComponent } from './formvertical.component';

describe('FormverticalComponent', () => {
  let component: FormverticalComponent;
  let fixture: ComponentFixture<FormverticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormverticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormverticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
