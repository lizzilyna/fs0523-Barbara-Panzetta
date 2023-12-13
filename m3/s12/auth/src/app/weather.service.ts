// weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { iCityWeather } from './../app/pages/auth/models/i-city-weather';
import { WeatherData } from './pages/auth/models/i-weather-data';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = environment.apiKey;
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string): Observable<iCityWeather> {
    const url = `${this.apiUrl}/weather?q=${city}&appid=${this.apiKey}`;
    return this.http.get<iCityWeather>(url);
  }

  getIdByFiveDay(cityId: number): Observable<WeatherData> {
    const url = `${this.apiUrl}/forecast?id=${cityId}&appid=${this.apiKey}`;
    return this.http.get<WeatherData>(url);
  }

}
