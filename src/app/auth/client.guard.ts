import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.getCurrentUserRole() === 'CLIENT') {
      return true; // Laisser passer si l'utilisateur est un CLIENT
    } else {
      this.router.navigate(['']); // Rediriger vers la page de login si l'utilisateur n'est pas un CLIENT
      return false;
    }
  }
}
