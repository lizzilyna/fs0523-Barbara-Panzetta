// weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { iCityWeather } from './../app/pages/auth/models/i-city-weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = environment.apiKey;
  private baseUrl = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string): Observable<iCityWeather> {
    const url = `${this.baseUrl}/weather?q=${city}&appid=${this.apiKey}`;
    return this.http.get<iCityWeather>(url);
  }

  getIdByFiveDay(cityId: number): Observable<any> {
    const url = `${this.baseUrl}/forecast?id=${cityId}&appid=${this.apiKey}`;
    return this.http.get(url);
  }

}
