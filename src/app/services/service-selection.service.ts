import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceSelectionService {

  constructor(private http: HttpClient) { }

  selectService(userId: number, serviceName: string) {
    const apiUrl = 'http://localhost:8080/api/v1/select/select-service';
    const body = { userId, serviceName };
    return this.http.post(apiUrl, body);
  }
}
