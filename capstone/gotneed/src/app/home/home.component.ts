import {Component, OnInit} from '@angular/core';

/*import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

/** @title Form field with hints *///togliendo tutti questi import da qui e da register componet ts dichiarandoli non standalone e spostando tutti gli import in appmodule, così come avveniva per girlformcomponent ho corretto il problema delle routes

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.scss',
  
 // imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatToolbarModule, MatButtonModule],
})
export class HomeComponent implements OnInit {
  showNavbarColor: boolean = true; // Determina se la navbar deve avere un colore diverso
  mestieri:any[] = [
    { nome: 'Autista', descrizione: 'Vuoi uno strappo?', image: 'assets/autista.jpg' },
    { nome: 'Dog-sitter', descrizione: 'Facciamo un giro', image: 'assets/dog-sitter.jpg' },
    { nome: 'Aiuto domestico', descrizione: 'Mettiamo in ordine', image: 'assets/house-keeping.jpg' },
    { nome: 'Riparazioni e migliorie', descrizione: 'Sono io mio marito', image: 'assets/operaia.jpg' },
    // Aggiungi altri mestieri con le relative informazioni e immagini
  ];


  constructor() { }

  ngOnInit(): void {}}