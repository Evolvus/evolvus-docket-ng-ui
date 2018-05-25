import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocketHeaderComponent } from './docket-header.component';

describe('DocketHeaderComponent', () => {
  let component: DocketHeaderComponent;
  let fixture: ComponentFixture<DocketHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocketHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocketHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
