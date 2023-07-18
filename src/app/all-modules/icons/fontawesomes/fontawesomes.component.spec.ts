import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontawesomesComponent } from './fontawesomes.component';

describe('FontawesomesComponent', () => {
  let component: FontawesomesComponent;
  let fixture: ComponentFixture<FontawesomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontawesomesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontawesomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
