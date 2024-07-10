import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-affaire',
  templateUrl: './affaire.component.html',
  styleUrls: ['./affaire.component.css']
})
export class AffaireComponent implements OnInit {
  dossierId: number;
  affaires: any[] = [];
  nouvelleAffaire: any = {
    numeroAffaire: '',
    natureAffaire: '',
    dateAudience: '',
    aboutissement: false
  };
  affaireToEdit: any = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.dossierId = this.route.snapshot.params['id'];
    this.fetchAffaires();
  }

  fetchAffaires(): void {
    this.http.get<any[]>(`http://localhost:8080/api/v1/affaires/dossier/${this.dossierId}`)
      .subscribe(affaires => {
        this.affaires = affaires;
      });
  }

  deleteAffaire(affaireId: number): void {
    this.http.delete(`http://localhost:8080/api/v1/affaires/delete/${affaireId}`)
      .subscribe(() => {
        this.fetchAffaires();
      });
  }

  addAffaire(): void {
    this.nouvelleAffaire.dossier = { id: this.dossierId };

    this.http.post(`http://localhost:8080/api/v1/affaires/save`, this.nouvelleAffaire)
      .subscribe(() => {
        this.fetchAffaires();
        this.resetNouvelleAffaire();
      });
  }

  updateAffaire(): void {
    if (this.affaireToEdit) {
      this.http.put(`http://localhost:8080/api/v1/affaires/update/${this.affaireToEdit.id}`, this.affaireToEdit)
        .subscribe(() => {
          this.fetchAffaires();
          this.cancelEdit();
        });
    }
  }

  editAffaire(affaire: any): void {
    this.affaireToEdit = { ...affaire }; // Clone the affaire object
  }

  cancelEdit(): void {
    this.affaireToEdit = null;
  }

  resetNouvelleAffaire(): void {
    this.nouvelleAffaire = {
      numeroAffaire: '',
      natureAffaire: '',
      dateAudience: '',
      aboutissement: false
    };
  }
}
