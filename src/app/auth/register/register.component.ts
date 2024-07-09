import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, RegisterRequest } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  clientRegisterData: RegisterRequest = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: 'client'
  };

  adminRegisterData: RegisterRequest = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: 'admin'
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  registerClient() {
    this.authService.registerClient(this.clientRegisterData)
      .subscribe(
        response => {
          // Gérer la réponse de l'inscription en tant que client
          this.router.navigate(['/login']);
        },
        error => {
          // Gérer les erreurs de l'inscription en tant que client
        }
      );
  }

  registerAdmin() {
    this.authService.registerAdmin(this.adminRegisterData)
      .subscribe(
        response => {
          // Gérer la réponse de l'inscription en tant qu'administrateur
          this.router.navigate(['/login']);

        },
        error => {
          // Gérer les erreurs de l'inscription en tant qu'administrateur
        }
      );
  }
}
