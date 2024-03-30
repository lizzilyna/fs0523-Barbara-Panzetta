import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-girl-form',
  templateUrl: './girl-form.component.html',
  styleUrls: ['./girl-form.component.scss']
})
export class GirlFormComponent implements OnInit {
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
  helpTypes: string[] = [];
  
  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.girlForm = this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      provincia: ['', Validators.required],
      dataNascita: ['', Validators.required],
      helpOfferti: [[]],
      //helpRichiesti: [[]]
    });
  }

  ngOnInit(): void {
    // Recupera i tipi di help dall'enum nel backend all'inizializzazione del componente
    this.dataService.getHelpTypes().subscribe(
      (types) => {
        this.helpTypes = types;
      },
      (error) => console.error('Errore nel recuperare i tipi di help: ', error)
    );
  }

  onSubmit(): void {
    if (this.girlForm.valid) {
      const formData = this.girlForm.value;

      // Non è necessario convertire i valori selezionati perché assumiamo
      // che siano già nel formato corretto (stringhe corrispondenti ai valori dell'enum)
      this.dataService.postGirl(formData).subscribe(
        response => {
          console.log('Dati inviati al backend: ', response)
          const data = {
            type: formData.helpOfferti[0],
            offeredById: response.id,
            requestedById: null
          }
          this.dataService.offerHelp(data).subscribe(response => {
            console.log('Dati inviati al backend: ', response)
          }, error => {
            console.error('Errore con creazione aiuto: ', error); console.log(data);
          } )

        },
        error => {
          console.error('Errore nell\'invio dei dati al backend: ', error); console.log(formData);
        }
      );
    }
  }
}