import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: any = {
    username: null,
    password: null,
  };

  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.loginForm);
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
