import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocketHomeComponent } from './docket-home.component';

describe('DocketHomeComponent', () => {
  let component: DocketHomeComponent;
  let fixture: ComponentFixture<DocketHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocketHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocketHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
