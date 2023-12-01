// completed.component.ts
import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { iTodo } from '../Models/itodo';


@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {
  todos: iTodo[] = [];

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.loadCompletedTodos();
  }

  loadCompletedTodos(): void {
    this.todosService.getCompletedTodos().then((completedData) => {
      this.todos = Array.isArray(completedData) ? completedData : [];
    },
    (error) => {
      console.error('Errore nel caricamento dei todos completati:', error);
    });
  }
  getCompletedTodos(): any[] {
    return this.todos.filter((todo) => todo.completed === true);
  }

}
