import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-girl-form',
  templateUrl: './girl-form.component.html',
  styleUrls: ['./girl-form.component.scss']
})
export class GirlFormComponent {
  girlForm: FormGroup;

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

  helpOffertiOptions: string[] = ['Aiuto compiti', 'Aiuto domestico', 'Assistenza anziani', 'Baby sitting', 'Giardinaggio', 'Pet-sitting', 'Riparazioni', 'Servizio Auto'];
  helpRichiestiOptions: string[] = ['Aiuto compiti', 'Aiuto domestico', 'Assistenza anziani', 'Baby sitting', 'Giardinaggio', 'Pet-sitting', 'Riparazioni', 'Servizio Auto'];
  
  nome: string = '';
  cognome: string = '';
  username: string = '';
  password: string = '';
  email: string = '';
  provincia: string = '';
  dataNascita: string = '';

 
  selectedHelpOfferti: string[] = []; 
  selectedHelpRichiesti: string[] = []; 

  constructor(
    private fb: FormBuilder,
    private dataService: DataService
    ) {

      this.girlForm = this.fb.group({
 
  nome: ['', Validators.required], 
  cognome: ['', Validators.required],
  username: ['', Validators.required],
  password: ['', Validators.required],
  email: ['', Validators.required], 
  provincia: ['', Validators.required],
  dataNascita: ['', Validators.required],

    helpOfferti: [[]], 
    
    helpRichiesti: [[]] 
      });
  }

  onSubmit() {
    if (this.girlForm.valid) {
      const formData = this.girlForm.value;
    // invio al backend
    this.dataService.postGirl(formData).subscribe (
      response=> {
        console.log('dati inviati al backend: ', response);
      },
      error=> {
        console.error(
          `errore nell'invio dei dati al backend: `, error)
        ;
        
      }
      
    );
        
      }
  
  }
}