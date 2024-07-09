import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent {
  activationCode: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.activationCode = params['code'] || '';
      if (this.activationCode) {
        this.activateAccount();
      }
    });
  }

  activateAccount() {
    this.http.get(`http://localhost:8080/api/v1/auth/activate-account?token=${this.activationCode}`)
      .subscribe(
        (response: any) => {
          this.successMessage = 'Compte activé avec succès !';
          this.errorMessage = '';
        },
        (error) => {
          this.errorMessage = 'Une erreur est survenue lors de l\'activation du compte.';
          this.successMessage = '';
        }
      );
  }
}
