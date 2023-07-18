import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForminputgroupsComponent } from './forminputgroups.component';

describe('ForminputgroupsComponent', () => {
  let component: ForminputgroupsComponent;
  let fixture: ComponentFixture<ForminputgroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForminputgroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForminputgroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
