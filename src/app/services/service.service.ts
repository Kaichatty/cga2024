import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseUrl = 'http://localhost:8080/api/v1/services'; // Assurez-vous que l'URL est correcte

  constructor(private http: HttpClient) { }

  getAllServices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getall`);
  }

  saveService(service: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/save`, service);
  }
}
