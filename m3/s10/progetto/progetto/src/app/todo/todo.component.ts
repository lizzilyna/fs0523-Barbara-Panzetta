// todo-page.component.ts
import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../Models/itodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos: any[] = [];
  completedTodos: any[] = [];
  newTodoTitle: string = '';

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  async loadTodos(): Promise<void> {
    this.todos = await this.todosService.getTodos();
    this.completedTodos = await this.todosService.getCompletedTodos();
  }

  async addTodo(): Promise<void> {
    if (this.newTodoTitle.trim() !== '') {
      const newTodo: any = { id: this.todos.length + 1, title: this.newTodoTitle, completed: false };
      await this.todosService.addTodo(newTodo);
      await this.loadTodos();
      this.newTodoTitle = '';
    }
  }
}


