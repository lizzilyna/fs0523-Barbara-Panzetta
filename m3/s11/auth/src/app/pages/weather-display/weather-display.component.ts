
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrl: './weather-display.component.scss'
})
export class WeatherDisplayComponent {
  @Input() weatherData: any;
  @Input() error: any;
}