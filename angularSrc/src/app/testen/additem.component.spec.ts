import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditemComponent } from '../adminboard/additem/additem.component';

describe('AdditemComponent', () => {
  let component: AdditemComponent;
  let fixture: ComponentFixture<AdditemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
