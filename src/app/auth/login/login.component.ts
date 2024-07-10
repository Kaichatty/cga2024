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
        // Rediriger l'utilisateur en fonction du rôle après avoir défini l'utilisateur actuel
        this.authService.setCurrentUser(user);
        this.authService.redirectUser(); // Utiliser le service pour rediriger
      },
      error => {
        // Gérer les erreurs
        this.errorMessage = 'Login failed. Please check your credentials.';
        console.error('Login error:', error);
      }
    );
  }
}
