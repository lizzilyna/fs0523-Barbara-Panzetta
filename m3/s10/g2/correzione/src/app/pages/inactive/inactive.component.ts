import { Component } from '@angular/core';
import { IPizza } from '../../Models/ipizza';
import { PizzeService } from '../../pizze.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrl: './inactive.component.scss'
})
export class InactiveComponent {
  pizze:IPizza[] = [];

  constructor(private pizzeSvc:PizzeService){}

  ngOnInit(){
    this.pizze = this.pizzeSvc.getInactivePizzas()
  }
}
