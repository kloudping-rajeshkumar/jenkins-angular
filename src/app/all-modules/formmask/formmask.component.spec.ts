import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmaskComponent } from './formmask.component';

describe('FormmaskComponent', () => {
  let component: FormmaskComponent;
  let fixture: ComponentFixture<FormmaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormmaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormmaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
