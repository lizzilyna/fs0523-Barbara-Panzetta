import { Girl } from './girl.model'; 

export class Help {
  id?: number;
  nome: string;
  cover: string="https://picsum.photos/200/300";
  offeredBy: Girl;
  requestedBy: Girl;

  constructor(nome: string, offeredBy: Girl, requestedBy: Girl) {
    this.nome = nome;
    this.offeredBy = offeredBy;
    this.requestedBy = requestedBy;
  }
}