import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErnestoComponent } from './ernesto/ernesto.component';
import { MariolinoComponent } from './mariolino/mariolino.component';
import { IvanoComponent } from './ivano/ivano.component';

@NgModule({
  declarations: [
    AppComponent,
    ErnestoComponent,
    MariolinoComponent,
    IvanoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
