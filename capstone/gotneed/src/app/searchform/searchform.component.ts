import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../services/data.service';
import { OnInit } from '@angular/core';
import { Help } from '../models/help.model';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from '../contact-form/contact-form.component';


@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrl: './searchform.component.scss'
})
export class SearchformComponent implements OnInit {
    
  selectedProvincia: string = '';
  selectedHelpType: string = '';
  
  provinceOptions: string[] = [
    'Agrigento', 'Alessandria', 'Ancona', 'Aosta', 'Arezzo', 'Ascoli Piceno', 'Asti', 'Avellino', 'Bari', 'Barletta-Andria-Trani', 
    'Belluno', 'Benevento', 'Bergamo', 'Biella', 'Bologna', 'Bolzano', 'Brescia', 'Brindisi', 'Cagliari', 'Caltanissetta', 
    'Campobasso', 'Carbonia-Iglesias', 'Caserta', 'Catania', 'Catanzaro', 'Chieti', 'Como', 'Cosenza', 'Cremona', 'Crotone', 
    'Cuneo', 'Enna', 'Fermo', 'Ferrara', 'Firenze', 'Foggia', 'Forlì-Cesena', 'Frosinone', 'Genova', 'Gorizia', 'Grosseto', 
    'Imperia', 'Isernia', 'La Spezia', `L'Aquila`, 'Latina', 'Lecce', 'Lecco', 'Livorno', 'Lodi', 'Lucca', 'Macerata', 'Mantova', 
    'Massa-Carrara', 'Matera', 'Medio Campidano', 'Messina', 'Milano', 'Modena', 'Monza e della Brianza', 'Napoli', 'Novara', 
    'Nuoro', 'Ogliastra', 'Olbia-Tempio', 'Oristano', 'Padova', 'Palermo', 'Parma', 'Pavia', 'Perugia', 'Pesaro e Urbino', 'Pescara', 
    'Piacenza', 'Pisa', 'Pistoia', 'Pordenone', 'Potenza', 'Prato', 'Ragusa', 'Ravenna', 'Reggio Calabria', 'Reggio Emilia', 'Rieti', 
    'Rimini', 'Roma', 'Rovigo', 'Salerno', 'Sassari', 'Savona', 'Siena', 'Siracusa', 'Sondrio', 'Taranto', 'Teramo', 'Terni', 'Torino', 
    'Trapani', 'Trento', 'Treviso', 'Trieste', 'Udine', 'Varese', 'Venezia', 'Verbano-Cusio-Ossola', 'Vercelli', 'Verona', 'Vibo Valentia', 
    'Vicenza', 'Viterbo'
  ];
  helpTypes: string[] = [];
  dataSource: Help[]= [];
  usernames: string[] = [];
  searched: boolean = false;
  selectedUsername: string = ''



  constructor(private dataService: DataService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadHelpTypes();
    
  }

  loadHelpTypes(): void {
    // Qui la logica per caricare i tipi di aiuto, esempio:
    this.dataService.getHelpTypes().subscribe(types => {
      this.helpTypes = types;
    });
  }



  searchHelps() {
    if (!this.selectedHelpType || !this.selectedProvincia) {
      console.error('Tipo di aiuto e provincia devono essere selezionati');
      return;
    }

    this.searched=true;
    
    this.dataService.getHelpUsernames(this.selectedHelpType, this.selectedProvincia)
      .subscribe(usernames => {
        this.usernames = usernames;
      }, error => {
        console.error('Errore nella ricerca: ', error);
      });
  }

 
      
  

  openContactForm(username: string, event: MouseEvent): void {
    event.preventDefault();

    const dialogRef = this.dialog.open(ContactFormComponent, {
        width: '500px',
        data: { username: username }
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog chiuso', result);
    });

    //this.selectedUsername=username;
    // Esegui qui l'azione desiderata quando l'utente clicca sul pulsante "Contattala"
    // Ad esempio, puoi reindirizzare l'utente a un modulo di contatto con il nome utente preimpostato
  }


  contactUser(email: string) {
    // Apri il client di posta elettronica predefinito dell'utente con l'indirizzo email preimpostato
    window.location.href = `mailto:${email}`;
  }
}
 
