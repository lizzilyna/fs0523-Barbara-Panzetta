import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactFormService } from '../services/contactForm.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'] 
})
export class ContactFormComponent {
  email: string = ''; 
  message: string = '';
  subject: string=''; 


  constructor(
    public dialogRef: MatDialogRef<ContactFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private contactFormService: ContactFormService 
  ) {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submitForm(): void {
    const formData = {
    recipient: this.email, 
    subject: this.subject,
    message: this.message
    };

    // Chiama il servizio per inviare i dati al backend
    this.contactFormService.sendContactForm(formData).subscribe(
      response => {
        // Gestisce la risposta di successo
        this.dialogRef.close(); // Chiude il dialog dopo l'invio con successo
       
      },
      error => {
        // Gestisce eventuali errori
        console.error('Errore durante l\'invio del form:', error);
      }
    );
  }
}
