import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from '../services/notifications.service';
import { Router } from '@angular/router';

interface User {
  username: string;
}

@Component({
  selector: 'app-choose-service',
  templateUrl: './choose-service.component.html',
  styleUrls: ['./choose-service.component.css']
})
export class ChooseServiceComponent {
  notificationSent = false;
  notificationError: string | undefined;
  selectedService: string | undefined;
  currentUser: User | null = null;

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router
  ) {
    this.currentUser = this.authService.getCurrentUserFromLocalStorage();
    console.log('Current User:', this.currentUser);
  }

  notifyAdmin(service: string | undefined) {
    if (this.currentUser && this.currentUser.username && service) {
      const message = `${this.currentUser.username} a choisi le service : ${service}`;
      this.notificationService.notifyAdmin(message).subscribe(
        () => {
          console.log(`Notification envoyée à l'administrateur : ${message}`);
          this.notificationSent = true;
          this.selectedService = service; // Assigner la valeur sélectionnée
          
          // Rediriger si le service est "Prise de rendez-vous selon les créneaux libres"
          if (service === 'rdv-direct') {
            this.router.navigate(['/admin-availability']);
          }
        },
        error => {
          console.error('Erreur lors de l\'envoi de la notification à l\'administrateur : ', error);
          this.notificationError = error.message || 'Erreur inconnue';
          this.notificationSent = false;
        }
      );
    } else {
      console.error('Utilisateur non trouvé dans localStorage ou nom d\'utilisateur non défini ou service non sélectionné.');
      // Gérer l'absence d'utilisateur ou service sélectionné comme nécessaire
    }
  }
}