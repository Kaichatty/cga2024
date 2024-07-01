import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = 'http://localhost:8080/api/v1/reservations';

  constructor(private http: HttpClient) { }

  createReservation(clientId: number, availabilityId: number, reservationTime: string): Observable<any> {
    const url = `${this.baseUrl}/create/${clientId}/${availabilityId}`;
    return this.http.post(url, { reservationTime });
  }

  getAllReservations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getall`);
  }

  getReservationById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  getReservationsByClient(clientId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/by-client/${clientId}`);
  }

  getReservationsByAvailability(availabilityId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/by-availability/${availabilityId}`);
  }

  updateReservation(id: number, reservationDetails: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/update/${id}`, reservationDetails);
  }

  deleteReservation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}
