import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-affaires',
  templateUrl: './client-affaires.component.html',
  styleUrls: ['./client-affaires.component.css']
})
export class ClientAffairesComponent implements OnInit {
  clientId: number = 52;
  affaires: any[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.getAffaires();
  }

  getAffaires(): void {
    this.clientService.getAffairesByClientId(this.clientId).subscribe(
      data => {
        this.affaires = data;
      },
      error => {
        console.error('Error fetching affaires:', error);
      }
    );
  }
}
