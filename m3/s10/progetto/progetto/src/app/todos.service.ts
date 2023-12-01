// todos.service.ts
import { Injectable } from '@angular/core';
import { Todo } from './Models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {

  constructor(){}
  apiUrl:string = 'http://localhost:3000/todos';


  private todos: any[] = [
    { id: 1, title: 'Fare la spesa', completed: false },
    { id: 2, title: 'Studiare Angular', completed: true },
    // Altri todo...
  ];

  async getTodos(): Promise<any[]> {
    // Simula una pausa di 2 secondi
    await this.delay(2000);
    return this.todos;
  }

  async getCompletedTodos(): Promise<any[]> {
    // Simula una pausa di 2 secondi
    await this.delay(2000);
    return this.todos.filter((todo) => todo.completed);
  }

  async addTodo(newTodo: any): Promise<void> {
    // Simula una pausa di 2 secondi
    await this.delay(2000);
    this.todos.push(newTodo);
  }

  async removeTodo(todoId: number): Promise<void> {
    // Simula una pausa di 2 secondi
    await this.delay(2000);
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }

  async updateTodo(todoId: number, updatedTodo: any): Promise<void> {
    // Simula una pausa di 2 secondi
    await this.delay(2000);
    const index = this.todos.findIndex((todo) => todo.id === todoId);
    if (index !== -1) {
      this.todos[index] = { ...this.todos[index], ...updatedTodo };
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
