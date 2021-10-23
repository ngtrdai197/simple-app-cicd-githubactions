import {Injectable} from "@angular/core";
import {Observable, throwError} from "rxjs";
import {ComponentStore, tapResponse} from "@ngrx/component-store";
import {TodoService} from "./todo.service";
import {ITodo} from "./todo.interface";
import {switchMap, tap} from "rxjs/operators";

export interface ITodoState {
	todos: ITodo[];
	todoSelected?: ITodo;
}

@Injectable()
export class TodoStore extends ComponentStore<ITodoState> {
	public updateTodoList = this.updater((_, todos: ITodo[]) => ({todos}));
	public getTodoList = this.effect(() => {
		return this.todoService.fetchTodoList().pipe(
			tapResponse(
				(todos: ITodo[]) => this.updateTodoList(todos),
				(error) => throwError(error),
			),
		);
	});

	public getTodoById = this.effect((todoId$: Observable<string>) => {
		return todoId$.pipe(
			switchMap((todoId) =>
				this.todoService.fetchTodoById(todoId).pipe(
					tapResponse(
						(todo) => this.patchState({todoSelected: todo}),
						(error) => throwError(error),
					),
				),
			),
		);
	});

	public removeTodoById = this.effect((todoId$: Observable<string>) => {
		return todoId$.pipe(
			switchMap((todoId) =>
				this.todoService.deleteTodoById(todoId).pipe(
					tap((response) => {
						console.log("response :>> ", response);
					}),
					tapResponse(
						(_) =>
							this.setState((state) => {
								const todos = state.todos.filter((todo) => todo._id !== todoId);
								return {
									...state,
									todos,
								};
							}),

						(error) => throwError(error),
					),
				),
			),
		);
	});

	public createNewTodo = this.effect((todo$: Observable<ITodo>) => {
		return todo$.pipe(
			switchMap((todo) =>
				this.todoService.createNewTodo(todo).pipe(
					tapResponse(
						(todo: ITodo) =>
							this.setState((state) => {
								return {
									...state,
									todos: [todo, ...state.todos],
								};
							}),
						(error) => throwError(error),
					),
				),
			),
		);
	});

	constructor(private readonly todoService: TodoService) {
		super({
			todos: [],
		});
	}
}
