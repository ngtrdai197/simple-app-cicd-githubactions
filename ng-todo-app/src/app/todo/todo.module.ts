import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoListComponent} from './todo-list/todo-list.component';
import {EachTodoComponent} from './each-todo/each-todo.component';
import {TodoStatusPipe} from './todo-status.pipe';

@NgModule({
  declarations: [TodoListComponent, EachTodoComponent, TodoStatusPipe],
  exports: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class TodoModule {
}
