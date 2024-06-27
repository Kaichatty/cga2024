import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  resetPasswordData = {
    newPassword: ''
  };
  token: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    // Récupère le token des paramètres de la route
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
  }

  onSubmit() {
    if (this.token) {
      const requestData = {
        newPassword: this.resetPasswordData.newPassword
      };
  
      this.http.post(`http://localhost:8080/api/v1/auth/reset-password?token=${this.token}`, requestData)
        .subscribe(response => {
          console.log('Password reset successful', response);
          // Ajouter une redirection ou un message de succès ici
        }, error => {
          console.error('Password reset failed', error);
          // Ajouter une gestion d'erreur ici
        });
    } else {
      console.error('Token is missing');
      // Ajouter une gestion d'erreur ici
    }
  }
}
