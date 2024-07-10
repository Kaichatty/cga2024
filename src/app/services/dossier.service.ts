import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DossierService {
  private baseUrl = 'http://localhost:8080/api/v1/dossiers';

  constructor(private http: HttpClient) { }

  getAllDossiers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getall`);
  }

  getDossierById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get/${id}`);
  }

  createDossier(dossier: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/save`, dossier);
  }

  updateDossier(id: number, dossier: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/update/${id}`, dossier);
  }

  deleteDossier(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}
