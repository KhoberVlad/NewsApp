import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators , ReactiveFormsModule} from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sign-up-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up-form.html',
  styleUrl: './sign-up-form.css',
})
export class SignUpForm {
SignUp = new FormGroup({
  firstName: new FormControl("", [Validators.required]),
  lastName: new FormControl("", [Validators.required]),
  email: new FormControl("", [Validators.required, Validators.minLength(5)]),
  phone: new FormControl("", [Validators.required, Validators.minLength(8)]),

  address: new FormGroup({
    city: new FormControl(""),
    street: new FormControl(""),
    region: new FormControl("")
  }),

  password: new FormControl("", [Validators.required, Validators.minLength(8)])
});
  
}
