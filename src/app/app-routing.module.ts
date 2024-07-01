import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ActivateAccountComponent } from './auth/activate-account/activate-account.component'; // Nouvelle importation
import { ClientDossierComponent } from './client-dossier/client-dossier.component';
import { ClientAffairesComponent } from './client-affaires/client-affaires.component';
import { AdminAvailabilityComponent } from './admin-availability/admin-availability.component';
import { WeeklyAvailabilitiesComponent } from './weekly-availabilities/weekly-availabilities.component';


const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'activate-account', component: ActivateAccountComponent },
  { path: 'client-dossier/:id', component: ClientDossierComponent },
  { path: 'clients/:id/affaires', component: ClientAffairesComponent },
  { path: 'admin-availability', component: AdminAvailabilityComponent },
  { path: 'weekly-availabilities', component: WeeklyAvailabilitiesComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
