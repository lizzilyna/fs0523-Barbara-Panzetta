import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { WeatherDisplayComponent } from '../weather-display/weather-display.component';
import { CitySearchComponent } from '../city-search/city-search.component';
import { FavoritesManagementComponent } from '../favorites-management/favorites-management.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    WeatherDisplayComponent,
    CitySearchComponent,
    FavoritesManagementComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
