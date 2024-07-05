import { Component, OnInit } from '@angular/core';
import { NotificationService, Notification } from '../services/notifications.service';
import { AuthService, User } from '../services/auth.service';

@Component({
  selector: 'app-admin-notifications',
  templateUrl: './admin-notifications.component.html',
  styleUrls: ['./admin-notifications.component.css']
})
export class AdminNotificationsComponent implements OnInit {
  notifications: Notification[] = [];
  currentUser: User | null = null;


  constructor(
    private notificationService: NotificationService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    
    this.currentUser = this.authService.getCurrentUserFromLocalStorage();

    if (this.currentUser) {
      this.fetchNotifications();
    } else {
      console.error('Utilisateur non connecté');
      // Gérer le cas où aucun utilisateur n'est connecté, par exemple rediriger vers la page de connexion
    }
  }

  private fetchNotifications(): void {
    this.notificationService.getAdminNotifications().subscribe(
      (data: Notification[]) => {
        this.notifications = data;
      },
      error => {
        console.error('Erreur lors de la récupération des notifications : ', error);
      }
    );
  }
  
}
