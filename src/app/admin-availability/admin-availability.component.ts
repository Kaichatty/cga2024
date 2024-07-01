import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ReservationService } from '../services/reservation.service';
import { AdminAvailabilityService } from '../services/admin-availability.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-availability',
  templateUrl: './admin-availability.component.html',
  styleUrls: ['./admin-availability.component.css'],
  providers: [DatePipe]
})
export class AdminAvailabilityComponent implements OnInit {

  admins: any[] = [];
  availabilities: any[] = [];
  selectedAdminId: number;
  selectedAvailabilityId: number;
  clientId: number;
  reservationTime: string;
  successMessage: string;
  errorMessage: string;

  constructor(
    private reservationService: ReservationService,
    private adminAvailabilityService: AdminAvailabilityService,
    private adminService: AdminService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.adminService.getAllAdmins().subscribe(
      (data: any[]) => this.admins = data,
      (error: any) => console.error(error)
    );
  }

  onAdminChange(): void {
    if (this.selectedAdminId) {
      this.adminAvailabilityService.getAvailabilitiesByAdmin(this.selectedAdminId).subscribe(
        (data: any[]) => this.availabilities = data,
        (error: any) => console.error(error)
      );
    } else {
      this.availabilities = [];
    }
  }

  createReservation(): void {
    if (this.clientId && this.selectedAvailabilityId && this.isValidTimeFormat(this.reservationTime)) {
      const formattedReservationTime = this.formatReservationTime(this.reservationTime);

      this.reservationService.createReservation(this.clientId, this.selectedAvailabilityId, formattedReservationTime)
        .subscribe({
          next: () => {
            this.successMessage = 'Réservation créée avec succès!';
            this.errorMessage = '';
          },
          error: (error: any) => {
            console.error(error);
            this.successMessage = '';
            this.errorMessage = 'Erreur lors de la création de la réservation.';
          }
        });
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs correctement.';
    }
  }

  private isValidTimeFormat(time: string): boolean {
    // Validation simple pour vérifier que time est au format HH:mm
    const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return regex.test(time);
  }

  private formatReservationTime(time: string): string {
    // Formater la date en utilisant DatePipe
    const currentDateTime = new Date();
    const [hours, minutes] = time.split(':');
    currentDateTime.setHours(parseInt(hours, 10));
    currentDateTime.setMinutes(parseInt(minutes, 10));
    return this.datePipe.transform(currentDateTime, 'yyyy-MM-ddTHH:mm:ss') || '';
  }
}
