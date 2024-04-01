import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactFormService } from '../services/contactForm.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'] // Assicurati che sia 'styleUrls' e non 'styleUrl'
})
export class ContactFormComponent {
  email: string = ''; 
  message: string = '';
  subject: string=''; 


  constructor(
    public dialogRef: MatDialogRef<ContactFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private contactFormService: ContactFormService // Inietta il tuo servizio per l'invio dei dati
  ) {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submitForm(): void {
    const formData = {
    recipient: this.email, // Assicurati che questi campi corrispondano a quelli attesi dal backend
    subject: this.subject,
    message: this.message
    };

    // Chiama il servizio per inviare i dati al backend
    this.contactFormService.sendContactForm(formData).subscribe(
      response => {
        // Gestisce la risposta di successo
        this.dialogRef.close(); // Chiude il dialog dopo l'invio con successo
        // Qui potresti anche mostrare un messaggio di successo all'utente
      },
      error => {
        // Gestisce eventuali errori
        console.error('Errore durante l\'invio del form:', error);
      }
    );
  }
}
