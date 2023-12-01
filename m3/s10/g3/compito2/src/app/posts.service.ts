import { Injectable } from '@angular/core';//un decoratore, un'etichetta che dice "la classe PostsService è iniettabile"
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.interface';

@Injectable({
  providedIn: 'root'
}) //dice che il servizio può essere iniettato in qualsiasi parte dell'app.

export class PostsService {// Dichiarazione di una classe chiamata PostsService
  private postsUrl = 'assets/db.json';  // Dichiarazione di una variabile privata chiamata postsUrl e assegnamento del valore 'assets/db.json'

  constructor(private http: HttpClient) {}  // Dichiarazione del costruttore della classe con un parametro privato chiamato http di tipo HttpClient
  getPosts(): Observable<Post[]> { // Dichiarazione di un metodo chiamato getPosts che restituisce un Observable contenente un array di oggetti di tipo Post
    return this.http.get <Post[]>(this.postsUrl);// Restituisce il risultato di una chiamata HTTP di tipo GET all'URL specificato (this.postsUrl)
    // e si aspetta di ricevere un array di oggetti di tipo Post
}
}
