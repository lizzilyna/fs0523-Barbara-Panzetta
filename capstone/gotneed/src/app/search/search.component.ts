// search.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  provinceOptions = ['Roma', 'Milano', 'Napoli']; // Esempio di opzioni
  helpTypes = ['GIARDINAGGIO', 'BABY_SITTING']; // Esempio di tipi di aiuto
  selectedProvincia: string='';
  selectedHelpType: string='';
  usernames: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
  }

  /*searchHelps() {
    this.dataService.getHelpUsernames(this.selectedHelpType, this.selectedProvincia)
      .subscribe(usernames => {
        this.usernames = usernames;
      }, error => {
        console.error('Errore nella ricerca: ', error);
      });
  }*/
}
