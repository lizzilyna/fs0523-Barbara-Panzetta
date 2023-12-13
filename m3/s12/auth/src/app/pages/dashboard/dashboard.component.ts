import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  weatherData: any; 

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {

    const cityName = 'NomeDellaCittà';

      this.weatherService.getWeatherByCity(cityName).subscribe(
      (data: any) => {
        this.weatherData = data;
        console.log(this.weatherData); 
      },
      (error: any) => {
        console.error('Errore durante il recupero dei dati meteorologici', error);
      }
    );
  }
}