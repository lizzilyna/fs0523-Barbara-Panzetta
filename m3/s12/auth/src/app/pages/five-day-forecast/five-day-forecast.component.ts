import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../weather.service';
import { WeatherData } from '../auth/models/i-weather-data'; // Assicurati che il percorso sia corretto

@Component({
  selector: 'app-five-day-forecast',
  templateUrl: './five-day-forecast.component.html',
  styleUrls: ['./five-day-forecast.component.scss']
})
export class FiveDayForecastComponent implements OnInit {
  cityWeather: WeatherData = {
    city: { name: '', country: '' },
    list: [], // Assicurati che la struttura di list sia corretta
  };

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.weatherService.getIdByFiveDay(params.id).subscribe((res: WeatherData) => {
        console.log(this.cityWeather = res);
      });
    });
  }
}
