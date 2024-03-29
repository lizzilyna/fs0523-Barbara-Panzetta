import { Girl } from './girl.model'; 

export interface Help {
  id: number;
  type: string; // Adattalo a come hai definito i tipi di help nel tuo backend
  provincia: string;
  // Aggiungi altre proprietà che sono rilevanti per gli oggetti help nel tuo progetto
}