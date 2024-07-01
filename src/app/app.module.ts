import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ClientDossierComponent } from './client-dossier/client-dossier.component';
import { DossierComponent } from './dossier/dossier.component';
import { ClientAffairesComponent } from './client-affaires/client-affaires.component';
import { ClientService } from './services/client.service';
import { AdminAvailabilityComponent } from './admin-availability/admin-availability.component';
import { AdminAvailabilityService } from './services/admin-availability.service';
import { ReservationService } from './services/reservation.service';
import { DatePipe } from '@angular/common';
import { WeeklyAvailabilitiesComponent } from './weekly-availabilities/weekly-availabilities.component'; // Assurez-vous d'importer DatePipe


@NgModule({
  declarations: [
    AppComponent,
    ClientDossierComponent,
    DossierComponent,
    ClientDossierComponent,
    ClientAffairesComponent,
    AdminAvailabilityComponent,
    WeeklyAvailabilitiesComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ClientService,AdminAvailabilityService, ReservationService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
