import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albumpage',
  templateUrl: './albumpage.component.html',
  styleUrl: './albumpage.component.scss'
})
export class AlbumpageComponent  implements OnInit {
  mestieri:any[] = [
    /*{ nome: 'Autista', descrizione: 'Vuoi uno strappo?', image: 'assets/autista.jpg' },
    { nome: 'Dog-sitter', descrizione: 'Facciamo un giro', image: 'assets/dog-sitter.jpg' },
    { nome: 'Aiuto domestico', descrizione: 'Mettiamo in ordine', image: 'assets/house-keeping.jpg' },
    { nome: 'Riparazioni e migliorie', descrizione: 'Sono io mio marito', image: 'assets/operaia.jpg' },
    */
  ];


  constructor(
    private dataservice: DataService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.dataservice.getHelpTypes().subscribe((types:string[])=> {
      this.mestieri=types.map(type=>({
        nome: type,
        descrizone: 'Descrizione per '+ type,
        image: this.getImageForHelpType(type),
      }));
    });
  }

  getImageForHelpType(type: string): string {
    const helpImageMap: { [key: string]: string } ={ 
      "AIUTO_COMPITI": "assets/mestieri/compiti.jpg",
      "AIUTO_DOMESTICO": "assets/mestieri/house-keeping.jpg",
      "ASSISTENZA_ANZIANI":"assets/mestieri/anziana.jpg",
      "BABY_SITTING": "assets/mestieri/baby sitting.jpg",
      "GIARDINAGGIO": "assets/mestieri/piante.jpg",
      "PET_SITTING": "assets/mestieri/dog-sitter.jpg",
      "RIPARAZIONI": "assets/mestieri/operaia.jpg",
      "SERVIZIO_AUTO": "assets/mestieri/autista.jpg"
      
  };

return helpImageMap[type] || 'assets/mestieri/default.jpg';
}


redirectToRegistration() {
  // Assicurati che il path corrisponda a quello configurato nel tuo routing module
  this.router.navigate(['/girl-form']); // O '/login' a seconda di cosa vuoi fare
}

redirectToLogin() {
  // Assicurati che il path corrisponda a quello configurato nel tuo routing module
  this.router.navigate(['/login']); // O '/login' a seconda di cosa vuoi fare
}

got(nome: string) {
  // Logica per segnalare che l'utente è disponibile a offrire aiuto per "nome"
  console.log('Got', nome);
  // Aggiungi qui la logica per aggiornare l'elenco degli aiuti offerti
}

need(nome: string) {
  // Logica per cercare aiuto in "nome"
  console.log('Need', nome);
  // Aggiungi qui la logica per aggiornare l'elenco degli aiuti richiesti
}
}


  /*selezionati: Set<string> = new Set();

  toggleSelezione(nome: string) {
    if (this.selezionati.has(nome)) {
      this.selezionati.delete(nome);
    } else {
      this.selezionati.add(nome);
    }
  }

}*/
