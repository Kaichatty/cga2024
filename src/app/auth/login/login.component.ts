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
      user => {
        // Stocker les informations utilisateur dans localStorage
        this.authService.setCurrentUser(user);
        // Rediriger vers la page de sélection de service
        this.router.navigate(['/choose-service']);
      },
      error => {
        // Gérer les erreurs
        this.errorMessage = 'Login failed. Please check your credentials.';
        console.error('Login error:', error);
      }
    );
  }
}
