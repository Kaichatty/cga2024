import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AudienceService } from '../services/audience.service';

@Component({
  selector: 'app-audiences-by-day',
  templateUrl: './audiences-by-day.component.html',
  styleUrls: ['./audiences-by-day.component.css']
})
export class AudiencesByDayComponent implements OnInit {
  selectedDate: string; // Variable pour stocker la date sélectionnée depuis l'URL
  audiences: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private audienceService: AudienceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedDate = params['date']; // Récupérer la date à partir des paramètres d'URL
      this.loadAudiencesByDay();
    });
  }

  loadAudiencesByDay() {
    this.audienceService.getAudiencesByDate(this.selectedDate).subscribe(data => {
      this.audiences = data;
    }, error => {
      console.error('Erreur lors du chargement des audiences:', error);
    });
  }
}
