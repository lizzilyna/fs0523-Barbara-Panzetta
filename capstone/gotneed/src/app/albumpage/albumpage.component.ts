import { Component } from '@angular/core';

@Component({
  selector: 'app-albumpage',
  templateUrl: './albumpage.component.html',
  styleUrl: './albumpage.component.scss'
})
export class AlbumpageComponent {
  mestieri:any[] = [
    { nome: 'Autista', descrizione: 'Vuoi uno strappo?', image: 'assets/autista.jpg' },
    { nome: 'Dog-sitter', descrizione: 'Facciamo un giro', image: 'assets/dog-sitter.jpg' },
    { nome: 'Aiuto domestico', descrizione: 'Mettiamo in ordine', image: 'assets/house-keeping.jpg' },
    { nome: 'Riparazioni e migliorie', descrizione: 'Sono io mio marito', image: 'assets/operaia.jpg' },
    // Aggiungi altri mestieri con le relative informazioni e immagini
  ];

}
