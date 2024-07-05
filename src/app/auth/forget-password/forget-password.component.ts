import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  email: string = '';

  constructor(private authService: AuthService) {}

  forgetPassword() {
    this.authService.forgetPassword(this.email).subscribe(
      (response:any) => {
        // handle successful password reset request
        console.log('Password reset link sent to email');
      },
      (error:any) => {
        // handle error
        console.error(error);
      }
    );
  }
}
