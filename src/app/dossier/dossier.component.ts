import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DossierService } from '../services/dossier.service';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.css']
})
export class DossierComponent implements OnInit {
  dossier: any = {};
  clients: any[] = [];
  selectedClientId: number | undefined;

  constructor(
    private dossierService: DossierService,
    private clientService: ClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clientService.getAllClients().subscribe(
      (data: any[]) => {
        this.clients = data;
      },
      error => {
        console.error('Erreur lors du chargement des clients :', error);
      }
    );
  }

  createDossier(): void {
    if (this.selectedClientId) {
      this.dossier.client = { id: this.selectedClientId };
      this.dossierService.createDossier(this.dossier).subscribe(
        () => {
          console.log('Dossier créé avec succès');
          this.router.navigate(['/list-dossiers']);
        },
        error => {
          console.error('Erreur lors de la création du dossier :', error);
        }
      );
    } else {
      console.error('Sélectionnez un client pour créer le dossier.');
    }
  }
}
