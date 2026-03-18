import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login-up-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-up-form.html',
  styleUrl: './login-up-form.css',
})
export class LoginUpForm {
  LoginUp = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)])
  })

}
