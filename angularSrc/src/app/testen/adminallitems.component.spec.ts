import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminallitemsComponent } from '../adminboard/adminallitems/adminallitems.component';

describe('AdminallitemsComponent', () => {
  let component: AdminallitemsComponent;
  let fixture: ComponentFixture<AdminallitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminallitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminallitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
