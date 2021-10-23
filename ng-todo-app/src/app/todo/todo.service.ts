import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ITodo} from "./todo.interface";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
	providedIn: "root",
})
export class TodoService {
	constructor(private readonly http: HttpClient) {}

	public fetchTodoList(): Observable<ITodo[]> {
		return this.http.get<ITodo[]>(`${environment.API_URL}/todos`);
	}

	public fetchTodoById(todoId: string): Observable<ITodo> {
		return this.http.get<ITodo>(`${environment.API_URL}/todos/${todoId}`);
	}

	public createNewTodo(todo: ITodo): Observable<ITodo> {
		return this.http.post<ITodo>(`${environment.API_URL}/todos`, {name: todo.name});
	}

	public deleteTodoById(id: string) {
		return this.http.delete(`${environment.API_URL}/todos/${id}`);
	}
}
