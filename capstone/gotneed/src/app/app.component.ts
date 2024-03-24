import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//modo in cui chiamiamo il componente
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gotneed';
  onInput(event: Event) {
    console.log((<HTMLInputElement>event.target).value);
    
  }
}
