import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';


@NgModule({
  declarations: [
    ClientDashboardComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
