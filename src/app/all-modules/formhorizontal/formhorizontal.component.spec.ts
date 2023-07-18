import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormhorizontalComponent } from './formhorizontal.component';

describe('FormhorizontalComponent', () => {
  let component: FormhorizontalComponent;
  let fixture: ComponentFixture<FormhorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormhorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormhorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
