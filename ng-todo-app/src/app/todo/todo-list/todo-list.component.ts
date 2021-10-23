import {ChangeDetectionStrategy, Component, Input, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {TodoStore} from "../todo-component.store";
import {ITodo, TODO_STATUS} from "../todo.interface";
import {generateID} from "../../helpers/generate-id";

@Component({
	selector: "app-todo-list",
	templateUrl: "./todo-list.component.html",
	styleUrls: ["./todo-list.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [TodoStore],
})
export class TodoListComponent implements OnInit {
	public todos$: Observable<ITodo[]>;
	public todoSelected$: Observable<ITodo>;

	constructor(private readonly todoStore: TodoStore) {}

	@Input()
	public set todoName(value: string) {
		if (value?.trim()?.length > 5) {
			this.todoStore.createNewTodo({
				_id: generateID(),
				name: value,
				status: TODO_STATUS.PENDING,
			});
		}
	}

	ngOnInit(): void {
		this.todos$ = this.todoStore.select((state) => state.todos);
		this.todoSelected$ = this.todoStore.select((state) => state.todoSelected);
	}

	public onTodoSelected(todo: ITodo): void {
		this.todoStore.getTodoById(todo._id);
	}

	public onRemoveTodo(id: string): void {
		this.todoStore.removeTodoById(id);
	}
}
