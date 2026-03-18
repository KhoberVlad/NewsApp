import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUpForm } from './login-up-form';

describe('LoginUpForm', () => {
  let component: LoginUpForm;
  let fixture: ComponentFixture<LoginUpForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginUpForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginUpForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
