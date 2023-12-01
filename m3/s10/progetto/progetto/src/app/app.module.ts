import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { CompletedComponent } from './completed/completed.component';
import { TodosService } from './todos.service';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [AppComponent, TodoComponent, CompletedComponent, ListaComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [TodosService],
  bootstrap: [AppComponent],
})
export class AppModule {}