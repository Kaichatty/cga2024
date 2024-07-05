import { Injectable } from '@angular/core';
import { Client, IFrame, IMessage, StompSubscription } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private notificationsSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public notifications$ = this.notificationsSubject.asObservable();

  private client: Client;

  constructor() {
    this.client = new Client({
      webSocketFactory: () => new SockJS('http://localhost:8080/ws') // Adapt to 'https' if using HTTPS
    });

    this.client.onConnect = () => {
      console.log('WebSocket connected');
    };

    this.client.onStompError = (frame: IFrame) => {
      console.error('WebSocket error:', frame);
    };

    this.client.activate();
  }

  sendNotification(message: string): void {
    this.client.publish({ destination: '/app/send/notification', body: message });
  }
}
