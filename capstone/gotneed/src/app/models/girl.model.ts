
import { Help } from './help.model'; 

export class Girl {
    id: number;
    nome: string;
    cognome: string;
    username: string;
    email: string;
    dataNascita: Date;
    avatar: string;
    offerti: Help[];
    richiesti: Help[];
  
    constructor(
      id: number,
      nome: string,
      cognome: string,
      username: string,
      email: string,
      dataNascita: Date,
      avatar: string,
      offerti: Help[],
      richiesti: Help[]
    ) {
      this.id = id;
      this.nome = nome;
      this.cognome = cognome;
      this.username = username;
      this.email = email;
      this.dataNascita = dataNascita;
      this.avatar = avatar;
      this.offerti = offerti;
      this.richiesti = richiesti;
    }
  }