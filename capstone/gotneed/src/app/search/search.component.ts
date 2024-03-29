import { Component, OnInit } from '@angular/core';
import { Help } from '../models/help.model';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  displayedColumns: string[] = ['id', 'type', 'provincia']; // Aggiorna con i campi corretti di Help
  dataSource: Help[] = []; // Usa l'interfaccia Help anziché PeriodicElement
 }
