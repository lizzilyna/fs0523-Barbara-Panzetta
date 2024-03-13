import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  isDisabled =false;

  constructor(){
  console.log("costruttore")

    }
      ngOnInit(): void {
    console.log("ngOnInit")
    setInterval(() => {this.isDisabled=!this.isDisabled
  },1000)

}
}
