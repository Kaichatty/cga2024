import { Injectable } from '@angular/core';
import { Client } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private notificationsSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public notifications$ = this.notificationsSubject.asObservable();

  private client: Client;

  constructor() {
    // Remplacez 'ws:' par 'http:' ou 'https:' en fonction du protocole de votre backend
    this.client = new Client({
      webSocketFactory: () => new SockJS('http://localhost:8080/ws')  // Remplacez par 'https' si votre backend est servi sur HTTPS
    });

    this.client.onConnect = () => {
      console.log('WebSocket connecté');
      // Actions supplémentaires à effectuer lors de la connexion
    };

    this.client.activate();
  }

  // Méthode pour envoyer une notification au backend
  sendNotification(message: string): void {
    this.client.publish({ destination: '/app/send/notification', body: message });
  }
}
