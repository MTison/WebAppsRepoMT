import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MylistsComponent } from '../mainboard/mylists/mylists.component';

describe('MylistsComponent', () => {
  let component: MylistsComponent;
  let fixture: ComponentFixture<MylistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MylistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
