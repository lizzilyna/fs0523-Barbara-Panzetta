import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GirlRequest } from '../models/girlRequest.model';

@Injectable({
  providedIn: 'root'
})
export class GirlRequestService {
  private baseUrl = 'http://localhost:8080'; 
  constructor(private http: HttpClient) { }

  createGirlRequest(girlRequest: GirlRequest): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, girlRequest);
  }
}