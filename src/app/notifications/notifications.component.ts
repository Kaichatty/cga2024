import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../services/web-socket-service.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications: string[] = [];

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit(): void {
    this.webSocketService.notifications$.subscribe(notifications => {
      this.notifications = notifications;
    });
  }
}
