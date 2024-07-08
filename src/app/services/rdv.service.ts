import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RdvService {
  private apiUrl = 'http://localhost:8080/api/v1/rdvs';

  constructor(private http: HttpClient) { }

  getPendingRdvs(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('admin:adminpass') // Utilisez les informations d'identification appropriées
    });
    return this.http.get<any[]>(`${this.apiUrl}/pending`, { headers });
  }

  confirmReservation(clientId: number, availabilityId: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('admin:adminpass') // Utilisez les informations d'identification appropriées
    });
    return this.http.post<any>(`${this.apiUrl}/confirm-reservation`, { clientId, availabilityId }, { headers });
  }

  acceptRdv(id: number): Observable<void> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('admin:adminpass') // Utilisez les informations d'identification appropriées
    });
    return this.http.put<void>(`${this.apiUrl}/accept/${id}`, null, { headers });
  }

  rejectRdv(id: number): Observable<void> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('admin:adminpass') // Utilisez les informations d'identification appropriées
    });
    return this.http.put<void>(`${this.apiUrl}/reject/${id}`, null, { headers });
  }
}
