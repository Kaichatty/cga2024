import { Component } from '@angular/core';
import { AuthService, AuthRequest } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData: AuthRequest = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.loginData).subscribe(
      response => {
        // handle successful login
        // this.router.navigate(['/client-dashboard']);
      },
      error => {
        // handle error
        console.error(error);
      }
    );
  }
}
