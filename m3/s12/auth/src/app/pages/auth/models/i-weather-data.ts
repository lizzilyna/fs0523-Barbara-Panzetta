export interface WeatherData {
    city: {
      name: string;
      country: string;
    };
    list: {
      main: {
        temp: number;
      };
      weather: {
        description: string;
      };
    }[];
  }