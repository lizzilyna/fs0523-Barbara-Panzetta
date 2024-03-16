import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Girl } from '../models/girl.model'; 

@Injectable({
  providedIn: 'root'
})
export class GirlService {constructor(private http: HttpClient) { }



}