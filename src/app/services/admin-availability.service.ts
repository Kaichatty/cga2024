import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAvailabilityService {
  private baseUrl = 'http://localhost:8080/api/v1/admin-availabilities';

  constructor(private http: HttpClient) { }

  getAvailabilitiesByAdmin(adminId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getByAdmin/${adminId}`);
  }
  createAvailability(adminId: number, availability: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create/${adminId}`, availability);
  }
}
