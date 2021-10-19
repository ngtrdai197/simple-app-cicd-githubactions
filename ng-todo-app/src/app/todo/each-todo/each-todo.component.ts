import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITodo} from '../todo.interface';

@Component({
  selector: 'app-each-todo',
  templateUrl: './each-todo.component.html',
  styleUrls: ['./each-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EachTodoComponent implements OnInit {
  @Input() todo: ITodo;
  @Output() todoSelected: EventEmitter<ITodo> = new EventEmitter<ITodo>();

  constructor() {
  }

  ngOnInit(): void {
  }
}
