import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesdatatablesComponent } from './tablesdatatables.component';

describe('TablesdatatablesComponent', () => {
  let component: TablesdatatablesComponent;
  let fixture: ComponentFixture<TablesdatatablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesdatatablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesdatatablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
