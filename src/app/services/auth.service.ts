import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface RegisterRequest {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface AuthRequest {
  email: string;
  password: string;
}

export interface ResetPasswordRequest {
  newPassword: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.baseurl}/auth`;

  constructor(private http: HttpClient) {}

  register(request: RegisterRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, request);
  }

  login(request: AuthRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/authenticate`, request);
  }

  forgetPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/forget-password?email=${email}`, null);
  }
  

  resetPassword(token: string, request: ResetPasswordRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/reset-password?token=${token}`, request);
  }
  activateAccount(token: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/activate-account?token=${token}`);
  }
}
