import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      if (token) {
        this.authService.activateAccount(token).subscribe(
          response => {
            // handle successful activation
            alert('Account activated successfully!');
            this.router.navigate(['/login']);
          },
          error => {
            // handle error
            console.error(error);
            alert('Account activation failed.');
          }
        );
      }
    });
  }

}
