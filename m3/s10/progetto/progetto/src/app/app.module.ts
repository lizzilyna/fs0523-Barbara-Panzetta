import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { CompletedComponent } from './completed/completed.component';
import { TodosService } from './todos.service';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [AppComponent, TodoComponent, CompletedComponent, FilterPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, CommonModule],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule {}
