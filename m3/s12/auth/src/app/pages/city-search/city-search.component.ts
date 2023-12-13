import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrl: './city-search.component.scss'
})
export class CitySearchComponent {
  @Output() searchWeather = new EventEmitter<string>();
cityName: string ='';
onSearch(): void {
  this.searchWeather.emit(this.cityName);
}

}
