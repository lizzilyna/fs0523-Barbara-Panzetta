import { iForecast } from './i-forecast';
export interface iCityWeather {
    cityName: string;
    country: string;
    forecasts: iForecast[];
  }