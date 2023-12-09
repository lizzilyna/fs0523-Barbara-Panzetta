import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router) {}

  login() {
    // Aggiungi qui la logica di autenticazione
    // Se l'autenticazione è riuscita, reindirizza alla dashboard
    this.router.navigate(['/dashboard']);
  }

  register() {
    // Aggiungi qui la logica di registrazione
  }
}
