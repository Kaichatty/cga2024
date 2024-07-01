import { Component } from '@angular/core';
import { AdminAvailabilityService } from '../services/admin-availability.service';

@Component({
  selector: 'app-weekly-availabilities',
  templateUrl: './weekly-availabilities.component.html',
  styleUrls: ['./weekly-availabilities.component.css']
})
export class WeeklyAvailabilitiesComponent {

  adminId: number; // Id de l'admin à partir duquel créer les disponibilités
  Date: string; // Date de début sélectionnée
  startTime: string; // Heure de début sélectionnée
  endTime: string; // Heure de fin sélectionnée
  availabilities: any[] = []; // Tableau des créneaux de disponibilités créés

  constructor(private adminAvailabilityService: AdminAvailabilityService) {}

  createAvailability(): void {
    // Vérifier que toutes les valeurs nécessaires sont présentes
    if (this.adminId && this.Date && this.startTime && this.endTime) {
      const availability = {
        date: this.Date,
        startTime: this.startTime,
        endTime: this.endTime
      };
      this.adminAvailabilityService.createAvailability(this.adminId, availability)
        .subscribe(
          (response) => {
            console.log('Disponibilité créée avec succès:', response);
            // Ajouter l'élément à la liste des disponibilités affichées à l'utilisateur si nécessaire
            this.availabilities.push(response);
            // Réinitialiser les champs après création
            this.Date = '';
            this.startTime = '';
            this.endTime = '';
          },
          (error) => {
            console.error('Erreur lors de la création de la disponibilité:', error);
            // Gérer les erreurs de création de disponibilité (affichage d'un message à l'utilisateur, etc.)
          }
        );
    } else {
      console.error('Veuillez remplir tous les champs.');
      // Gérer l'erreur de validation ici (affichage d'un message à l'utilisateur, etc.)
    }
  }
}
