import { Pipe, PipeTransform } from '@angular/core';
import {TODO_STATUS} from './todo.interface';

@Pipe({
  name: 'todoStatus'
})
export class TodoStatusPipe implements PipeTransform {

  transform(todoStatus: TODO_STATUS): unknown {
    switch (todoStatus) {
      case TODO_STATUS.DONE:
        return 'DONE';
      case TODO_STATUS.IN_PROGRESS:
        return 'IN PROGRESS';
      case TODO_STATUS.PENDING:
        return 'PENDING';
      default:
        return '';
    }
  }
}
