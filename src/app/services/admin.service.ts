import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8080/api/v1/admins/getall';

  constructor(private http: HttpClient) { }

  getAllAdmins(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}
