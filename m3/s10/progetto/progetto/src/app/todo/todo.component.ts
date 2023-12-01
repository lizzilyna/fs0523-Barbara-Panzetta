// todo-page.component.ts
import { Component } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../Models/todo';
import { Router } from '@angular/router';
import { iTodo } from '../Models/itodo'; 


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent  {
  todos: iTodo[] = [];
  
  newTodoTitle: string = '';

  newTodo: iTodo = new Todo('', false, false);
  
    oldTodo:iTodo|null = null;

    loading: boolean= false;

    completedTemp: boolean = false;

constructor(
    private todosService: TodosService,
    private router:Router
    ) {}

    delete(todoId: number): void {
      this.todosService.delete(todoId).then(() => {
        // Dopo l'eliminazione, ricarica i todo
        this.loadTodos();
      });
    }
  
    private loadTodos(): void {
      // Chiamata al servizio per ottenere i todo
      this.todosService.getAll().then((todos) => {
        this.todos = todos;
      });
    }

    saveTodo(): void {
      this.loading = true;
      this.newTodo.completed = this.completedTemp;
      this.todosService.create(this.newTodo).then(res => {
        this.loading = false;
        this.oldTodo = res;
        this.newTodo = { title: "Nuovo task", completed: false }; 
        console.log('Task aggiunto con successo:', res);
    
        
        this.todos.push(res);
      });
    }
 
  }