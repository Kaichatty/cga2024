import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ServiceService } from '../services/service.service';
import { WebSocketService } from '../services/web-socket-service.service';

@Component({
  selector: 'app-choose-service',
  templateUrl: './choose-service.component.html',
  styleUrls: ['./choose-service.component.css']
})
export class ChooseServiceComponent {
  selectedService: string;
  userconnect: any;

  constructor(
    private authService: AuthService,
    private serviceService: ServiceService,
    private webSocketService: WebSocketService
  ) {
    this.userconnect = this.authService.getCurrentUserFromLocalStorage();
  }

  chooseService(): void {
    console.log('Service sélectionné :', this.selectedService);
    console.log('Utilisateur connecté :', this.userconnect);

    if (this.selectedService && this.userconnect?.id) {
      const serviceData = {
        nom: this.selectedService,
        clientId: this.userconnect.id
      };
      this.serviceService.saveService(serviceData).subscribe(
        (response) => {
          console.log('Service créé avec succès !', response);
          this.sendNotificationToAdmin(this.selectedService);
        },
        (error) => {
          console.error('Erreur lors du choix du service :', error);
        }
      );
    }
  }

  sendNotificationToAdmin(serviceName: string): void {
    this.webSocketService.sendNotification(`Nouveau service choisi : ${serviceName}`);
  }
}
