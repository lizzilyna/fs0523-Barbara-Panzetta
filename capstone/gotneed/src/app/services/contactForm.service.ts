import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailDetails } from '../models/emailDetails';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor(private http: HttpClient) { }

  sendContactForm(emailDetails: EmailDetails) {
    return this.http.post('http://localhost:8080/send-email', emailDetails);
  }
}