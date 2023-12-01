import { iTodo } from "./itodo";

export class Todo implements iTodo {
  constructor
  ( public id: number,
    public title: string,
    public completed: boolean){}
}