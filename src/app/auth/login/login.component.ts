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
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.loginData).subscribe(
      response => {
        // handle successful login
        this.authService.setCurrentUser(response); // Store user details in localStorage
        this.router.navigate(['/choose-service']); // Redirect to choose-service page
      },
      error => {
        // handle error
        this.errorMessage = 'Login failed. Please check your credentials.';
        console.error('Login error:', error);
      }
    );
  }
}
