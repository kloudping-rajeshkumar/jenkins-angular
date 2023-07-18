import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesbasicComponent } from './tablesbasic.component';

describe('TablesbasicComponent', () => {
  let component: TablesbasicComponent;
  let fixture: ComponentFixture<TablesbasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesbasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesbasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
