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

  onSubmit() {
    // Logica per gestire l'invio del form
    console.log('Dati inviati:', this.nome, this.cognome, this.username, this.email, this.provincia, this.dataNascita);
  }
}