import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageEvolvusComponent } from './login-page-evolvus.component';

describe('LoginPageEvolvusComponent', () => {
  let component: LoginPageEvolvusComponent;
  let fixture: ComponentFixture<LoginPageEvolvusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageEvolvusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageEvolvusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
