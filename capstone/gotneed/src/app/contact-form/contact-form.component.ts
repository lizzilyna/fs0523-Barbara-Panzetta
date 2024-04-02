import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactFormService } from '../services/contactForm.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
   // @Inject(MAT_DIALOG_DATA) public data: any,
    //private contactFormService: ContactFormService 
    private snackBar: MatSnackBar
  ) {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submitForm(): void {
    this.dialogRef.close();
    this.snackBar.open('Messaggio inviato!', 'Chiudi', { duration: 3000})

    // Chiama il servizio per inviare i dati al backend
  }
}
