import { iForecast } from './i-forecast';
import { WeatherData } from './i-weather-data';
export interface iCityWeather extends WeatherData {
    cityName: string;
    country: string;
    forecasts: iForecast[];
  }