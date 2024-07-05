import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
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

export interface User {
  id: string;
  email: string;
  username: string;
  lastname: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.baseurl}/auth`;
  private currentUser: User | null = null;
  private currentUserKey = 'currentUser';

  constructor(private http: HttpClient) {
    this.currentUser = this.getCurrentUserFromLocalStorage();
  }

  getName(): string {
    return this.currentUser?.username || '';
  }

  setCurrentUser(user: User): void {
    this.currentUser = user;
    this.storeUserInLocalStorage(user);
  }

  getCurrentUserFromLocalStorage(): User | null {
    const storedUser = localStorage.getItem(this.currentUserKey);
    return storedUser ? JSON.parse(storedUser) : null;
  }

  clearCurrentUser(): void {
    this.currentUser = null;
    this.removeUserFromLocalStorage();
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentUserFromLocalStorage();
  }

  register(request: RegisterRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, request);
  }

  login(request: AuthRequest): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/authenticate`, request).pipe(
      tap((user: User) => this.setCurrentUser(user))
    );
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

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  private storeUserInLocalStorage(user: User): void {
    localStorage.setItem(this.currentUserKey, JSON.stringify(user));
  }

  private removeUserFromLocalStorage(): void {
    localStorage.removeItem(this.currentUserKey);
  }
}
