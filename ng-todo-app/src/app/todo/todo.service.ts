import {Injectable} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {filter} from 'rxjs/operators';
import {ITodo, TODO_STATUS} from './todo.interface';
import {generateID} from '../helpers/generate-id';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private TODOS: ITodo[] = [
    {
      id: generateID(),
      name: 'Todo 1',
      status: TODO_STATUS.IN_PROGRESS
    },
    {
      id: generateID(),
      name: 'Todo 2',
      status: TODO_STATUS.DONE
    },
    {
      id: generateID(),
      name: 'Todo 3',
      status: TODO_STATUS.PENDING
    }
  ];

  constructor() {
  }

  public fetchTodoList(): Observable<ITodo[]> {
    return of(this.TODOS);
  }

  public fetchTodoById(todoId: string): Observable<ITodo> {
    return from(this.TODOS).pipe(filter(todo => todo.id === todoId));
  }

  public createNewTodo(todo: ITodo): Observable<ITodo> {
    this.TODOS.push(todo);
    return of(todo);
  }
}
