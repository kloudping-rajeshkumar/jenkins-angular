import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypiconsComponent } from './typicons.component';

describe('TypiconsComponent', () => {
  let component: TypiconsComponent;
  let fixture: ComponentFixture<TypiconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypiconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
