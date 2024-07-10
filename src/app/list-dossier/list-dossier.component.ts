import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-dossier',
  templateUrl: './list-dossier.component.html',
  styleUrls: ['./list-dossier.component.css']
})
export class ListDossierComponent implements OnInit {
  dossiers: any[] = [];
  dossierToEdit: any = null;
  editing: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.fetchDossiers();
  }

  fetchDossiers(): void {
    this.http.get<any[]>('http://localhost:8080/api/v1/dossiers/getall')
      .subscribe(dossiers => {
        this.dossiers = dossiers;
      });
  }

  deleteDossier(id: number): void {
    this.http.delete(`http://localhost:8080/api/v1/dossiers/delete/${id}`)
      .subscribe(() => {
        // Recharger les dossiers après la suppression
        this.fetchDossiers();
      });
  }
  editDossier(dossier: any): void {
    this.dossierToEdit = { ...dossier }; // Clone the dossier object
    this.editing = true;
  }

  cancelEdit(): void {
    this.dossierToEdit = null;
    this.editing = false;
  }

  saveDossier(): void {
    this.http.put(`http://localhost:8080/api/v1/dossiers/update/${this.dossierToEdit.id}`, this.dossierToEdit)
      .subscribe(() => {
        this.fetchDossiers(); // Refresh the dossier list after update
        this.cancelEdit(); // Clear editing mode
      });
  }
  manageAffaires(dossierId: number): void {
    this.router.navigate(['/dossier', dossierId, 'affaires']);
  }

}
