import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this._v());
    }
  }
  _v() {
    return this.loginForm.value;
  }

  // onSubmit() {
  //   // this.authService.login(this.username, this.password).subscribe(
  //   //   (success: boolean) => {
  //   //     console.log('Login successful');
  //   //     // Redirect or do something else upon successful login
  //   //   },
  //   //   (error: Error) => {
  //   //     console.error('Login failed:', error);
  //   //     // Handle error (e.g., show an error message)
  //   //   }
  //   // );
  //   console.log('this.userform.username', this.userform.username);
  //   this.authService.login(this.userform.username, this.userform.password);
  // }
}
