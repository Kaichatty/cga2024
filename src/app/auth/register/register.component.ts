import { Component } from '@angular/core';
import { AuthService, RegisterRequest } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData: RegisterRequest = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.registerData).subscribe(
      response => {
        // handle successful registration
        this.router.navigate(['/login']);
      },
      error => {
        // handle error
        console.error(error);
      }
    );
  }
}
