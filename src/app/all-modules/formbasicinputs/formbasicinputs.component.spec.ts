import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbasicinputsComponent } from './formbasicinputs.component';

describe('FormbasicinputsComponent', () => {
  let component: FormbasicinputsComponent;
  let fixture: ComponentFixture<FormbasicinputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbasicinputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbasicinputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
