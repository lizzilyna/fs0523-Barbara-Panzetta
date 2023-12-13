import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../weather.service';
import { iCityWeather } from '../auth/models/i-city-weather';

@Component({
  selector: 'app-five-day-forecast',
  templateUrl: './five-day-forecast.component.html',
  styleUrls: ['./five-day-forecast.component.scss']
})
export class FiveDayForecastComponent implements OnInit {
  cityWeather: iCityWeather = {
    cityName: '',
    country: '',
    forecasts: [],
  };

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.weatherService.getIdByFiveDay(params.id).subscribe((res) => {
        console.log(this.cityWeather = res);
      });
    });
  }
}
