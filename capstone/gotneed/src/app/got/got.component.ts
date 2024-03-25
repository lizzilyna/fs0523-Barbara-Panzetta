import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-got',
  templateUrl: './got.component.html',
  styleUrl: './got.component.scss'
})
export class GotComponent {
  constructor(private dataService: DataService) {}

  offerHelp(helpId: number) {
    this.dataService.offerHelp(helpId).subscribe(
      response => {
        console.log('Help offered successfully', response);
      },
      error => {
        console.error('Error offering help', error);
      }
    );
}}
