import {Component, OnInit} from '@angular/core';

/*import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

/** @title Form field with hints *///togliendo tutti questi import da qui e da register componet ts dichiarandoli non standalone e spostando tutti gli import in appmodule, così come avveniva per girlformcomponent ho corretto il problema delle routes

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.scss',
  
 // imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatToolbarModule, MatButtonModule],
})
export class HomeComponent implements OnInit {
    // Aggiungi altri mestieri con le relative informazioni e immagini
  


  constructor() { }

  ngOnInit(): void {}}