// Importa i moduli necessari da Angular
import { Component} from '@angular/core';
import { PostsService } from '../posts.service'; // Importa il servizio

// Definisce un nuovo componente chiamato HomeComponent
@Component({
  selector: 'app-home', 
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.scss'] 
})
// Dichiarazione della classe del componente HomeComponent 
export class HomeComponent {
  // Dichiarazione di una variabile chiamata 'posts' di tipo array any e inizializzata con un array vuoto
  posts: any[] = [];

  // Costruttore del componente, inietta il servizio PostsService come 'postsService'
  constructor(private postsService: PostsService)  {
    // Chiamata al metodo 'getPosts' del servizio 'postsService' e sottoscrizione all'Observable restituito
    this.postsService.getPosts().subscribe(
      // Funzione chiamata quando i dati sono ricevuti con successo
      (data) => {
        // Assegna i dati ottenuti dalla chiamata HTTP alla variabile 'posts'
        this.posts = data;
      },
      // Funzione chiamata in caso di errore nella chiamata HTTP
      (error) => {
     
        console.error('Errore nel recupero dei post', error);
      }
    );
  }
}