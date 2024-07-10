import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AffaireService {
  private baseUrl = 'http://localhost:8080/api/v1/affaires';

  constructor(private http: HttpClient) { }

  getAffairesByDossierId(dossierId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/dossier/${dossierId}`);
  }

  createAffaire(dossierId: number, affaire: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/save`, { ...affaire, dossier: { id: dossierId } });
  }

  updateAffaire(id: number, affaire: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${id}`, affaire);
  }

  deleteAffaire(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}
