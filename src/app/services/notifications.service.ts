// src/app/services/notifications.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private baseUrl = 'http://localhost:8080/api/v1/notifs';

  constructor(private http: HttpClient) { }

  notifyAdmin(message: string): Observable<any> {
    
    return this.http.post(`${this.baseUrl}/notifyadmin`, message, { responseType: 'text' });
  }

  getAdminNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.baseUrl}/admin-notifications`);
  }
}

export interface Notification {
  message: string
  timestamp: string;
}
