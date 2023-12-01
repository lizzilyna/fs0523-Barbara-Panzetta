import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private postsUrl = 'https://striveschool-api.herokuapp.com/api/posts'; // Sostituisci con l'URL corretto
  private authToken ="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTY4YjNlNWI5NzczYjAwMTgwMzE3YzciLCJpYXQiOjE3MDEzNjA2MTMsImV4cCI6MTcwMjU3MDIxM30._s7yfvHg0OF58qNQLc8c4jo05FMQaAisD9fNOvtLsx0"


  constructor(private http:HttpClient) { }

  getPosts(): Observable<Post[]> {
    // Aggiungi il token alle intestazioni
    const headers = new HttpHeaders({
      'Authorization': this.authToken
    });

    // Utilizza le intestazioni nella richiesta
    return this.http.get<Post[]>(this.postsUrl, { headers });
  }

  updatePost(post: Post): Observable<Post> {
    // Aggiungi il token alle intestazioni
    const headers = new HttpHeaders({
      'Authorization': this.authToken
    });

    // Utilizza le intestazioni nella richiesta
    return this.http.put<Post>(`${this.postsUrl}/${post.id}`, post, { headers });
  }
}

export interface Post {
  id: number;
  title: string;
  active: boolean;
  type: 'news' | 'politics' | 'education';
}