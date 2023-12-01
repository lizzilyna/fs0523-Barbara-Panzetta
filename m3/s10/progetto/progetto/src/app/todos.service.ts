// todos.service.ts
import { Injectable } from '@angular/core';
import { Todo } from './Models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {

  constructor(){}
  apiUrl:string = 'http://localhost:3000/todos';


  getAll():Promise<Todo[]>{
    return fetch(this.apiUrl).then(res => res.json())
  }

  getById(id:number):Promise<Todo>{
    return fetch(this.apiUrl+`/${id}`).then(res => res.json())
  }

  getCompletedTodos(): Promise<Todo[]> {
   return fetch(this.apiUrl + '/completed').then(res => res.json());
  }

  create(todo:Partial<Todo>):Promise<Todo>{
    todo = this.toBoolean(todo);
    return fetch(this.apiUrl,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(todo)
    }).then(res => res.json())
  }

  update(todo:Todo):Promise<Todo>{
    todo = this.toBoolean(todo);
    return fetch(this.apiUrl+`/${todo.id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(todo)
    }).then(res => res.json())
  }

  delete(id:number):Promise<Todo>{
    return fetch(this.apiUrl+`/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res => res.json())
  }

  toBoolean<T>(todo:Partial<Todo>){
    todo.completed = Boolean(Number(todo.completed));
    return todo as T
  }

}
