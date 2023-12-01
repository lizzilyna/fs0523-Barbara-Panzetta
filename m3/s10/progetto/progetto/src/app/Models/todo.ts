import { iTodo } from "./itodo";

export class Todo implements iTodo {
  constructor
  ( public title: string,
    public completed: boolean,
    public completedTemp: boolean = false,
    public id?: number,){}
}