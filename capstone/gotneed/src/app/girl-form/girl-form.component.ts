import { Component } from '@angular/core';

@Component({
  selector: 'app-girl-form',
  templateUrl: './girl-form.component.html',
  styleUrls: ['./girl-form.component.css']
})
export class GirlFormComponent {
  nome: string = '';
  cognome: string = '';
  username: string = '';
  email: string = '';
  provincia: string = '';
  dataNascita: string = '';

  helpOfferti: string[]=[]; // Array per gli help offerti
  helpRichiesti: string[]=[]; // Array per gli help richiesti

  selectedHelpOfferti: string[] = []; 
  selectedHelpRichiesti: string[] = []; 

  constructor() {
 
  this.nome = ''; // Inizializza il campo nome
  this.cognome = ''; // Inizializza il campo cognome
  this.username = ''; // Inizializza il campo username
  this.email = ''; // Inizializza il campo email
  this.provincia = ''; // Inizializza il campo provincia
  this.dataNascita = ''; // Inizializza il campo dataNascita

    // Inizializza gli help offerti con opzioni predefinite
    this.helpOfferti = ['Aiuto compiti', 'Aiuto domestico', 'Assistenza anziani', 'Baby sitting', 'Giardinaggio', 'Pet-sitting', 'Riparazioni', 'Servizio Auto'];

    // Inizializza gli help richiesti con opzioni predefinite
    this.helpRichiesti = ['Aiuto domestico', 'Assistenza anziani', 'Riparazioni'];
  }

  onSubmit() {
    // Logica per inviare il form al server


    console.log('Dati inviati:', this.nome, this.cognome, this.username, this.email, this.provincia, this.dataNascita, this.helpOfferti, this.helpRichiesti);
  }
}