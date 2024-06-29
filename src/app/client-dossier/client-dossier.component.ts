import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-dossier',
  templateUrl: './client-dossier.component.html',
  styleUrls: ['./client-dossier.component.css']
})
export class ClientDossierComponent implements OnInit {
  dossier: any;
  clientId: number;
  loading = false;

  constructor(private route: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.clientId = +params.get('id')!;
      this.getClientDossier();
    });
  }

  getClientDossier(): void {
    this.loading = true;
    this.clientService.getDossier(this.clientId).subscribe(
      (data: any) => {
        this.dossier = data;
        this.loading = false;
      },
      error => {
        console.error('Erreur lors de la récupération du dossier', error);
        this.loading = false;
      }
    );
  }
}
