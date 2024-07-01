import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'http://localhost:8080/api/v1/clients';

  constructor(private http: HttpClient) { }

  getDossier(clientId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${clientId}/dossier`);
  }
  getAffairesByClientId(clientId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${clientId}/affaires`);
  }
}
