import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightBoxComponent } from './light-box.component';

describe('LightBoxComponent', () => {
  let component: LightBoxComponent;
  let fixture: ComponentFixture<LightBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
