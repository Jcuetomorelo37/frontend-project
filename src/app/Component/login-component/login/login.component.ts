import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputLabelComponent } from '../../Inputs/input-label/input-label.component';
import { ButtonComponent } from '../../Buttons/button/button.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from '../../../auth/auth-state/auth.actions';
import { selectAuthentication } from '../../../auth/auth-state/auth.selector';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    InputLabelComponent,
    ButtonComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export default class LoginComponent {
  
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private readonly store: Store, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),

    });
  }
  onSubmit(event: Event) {
    event.preventDefault();
    const email= this.loginForm.controls['email'].value!
    const password = this.loginForm.controls['password'].value!
    this.store.dispatch(login({email , password}))
    this.store.select(selectAuthentication).subscribe((isAuthenticated) => {
      console.log('autenticado', isAuthenticated);
      if (isAuthenticated) {
        window.location.href = '/home'
      }
    });
  }
}
