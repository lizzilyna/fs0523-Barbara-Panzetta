import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.dataService.login(this.loginForm.value).subscribe({
        next: (token) => {
          localStorage.setItem ('authToken', token)
          console.log('Login completato, token salvato');
          // Salva il token e naviga alla home o alla selezione degli help
        },
        error: (error) => console.error('Errore nel login', error),
      });
    }
  }
}