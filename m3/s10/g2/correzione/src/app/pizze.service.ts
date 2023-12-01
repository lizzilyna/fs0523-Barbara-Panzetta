import { Injectable } from '@angular/core';
import { IPizza } from './Models/ipizza';

@Injectable({
  providedIn: 'root'
})
export class PizzeService {

  pizze:IPizza[] = [
    {
      id:0,
      gusto:'Margherita',
      prezzo:5,
      active:true
    },
    {
      id:1,
      gusto:'Diavola',
      prezzo:1,
      active:true
    },
    {
      id:2,
      gusto:'Ananas',
      prezzo:5,
      active:false
    },
    {
      id:3,
      gusto:'Marinara',
      prezzo:4.5,
      active:true
    },
    {
      id:4,
      gusto:'Porcellina',
      prezzo:8,
      active:true
    },
    {
      id:5,
      gusto:'marchigiana',
      prezzo:8,
      active:false
    }
  ];

  constructor() { }

  getActivePizzas(){
    return this.pizze.filter(p => p.active)
  }

  getInactivePizzas(){
    return this.pizze.filter(p => !p.active)
  }

}
