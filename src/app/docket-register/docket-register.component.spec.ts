import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocketRegisterComponent } from './docket-register.component';

describe('DocketRegisterComponent', () => {
  let component: DocketRegisterComponent;
  let fixture: ComponentFixture<DocketRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocketRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocketRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
