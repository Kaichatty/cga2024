import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-activate-account',
  template: `
    <div class="container">
      <h1>Activation de compte</h1>

      <div *ngIf="errorMessage" class="alert alert-danger">
        {{ errorMessage }}
      </div>

      <div *ngIf="successMessage" class="alert alert-success">
        {{ successMessage }}
      </div>

      <p *ngIf="loading">Activation en cours...</p>
    </div>
  `
})
export class ActivateAccountComponent {
  errorMessage: string = '';
  successMessage: string = '';
  loading: boolean = true;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.activateAccount();
  }

  activateAccount() {
    const token = this.route.snapshot.queryParams['token'];
  
    this.authService.activateAccount(token)
      .subscribe(
        (response) => {
          this.successMessage = 'Compte activé avec succès !';
          this.errorMessage = '';
          this.loading = false;
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error(error);
          this.errorMessage = 'Une erreur est survenue lors de l\'activation du compte.';
          this.successMessage = '';
          this.loading = false;
        }
      );
    }
}