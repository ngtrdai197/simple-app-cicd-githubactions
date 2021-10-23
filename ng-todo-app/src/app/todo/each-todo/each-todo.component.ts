import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
} from "@angular/core";
import {ITodo} from "../todo.interface";

@Component({
	selector: "app-each-todo",
	templateUrl: "./each-todo.component.html",
	styleUrls: ["./each-todo.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EachTodoComponent implements OnInit {
	@Input() todo: ITodo;
	@Output() todoSelected: EventEmitter<ITodo> = new EventEmitter<ITodo>();
	@Output() removeTodo: EventEmitter<string> = new EventEmitter<string>();
	constructor() {}

	ngOnInit(): void {}

	public onDelete(id: string) {
		const isConfirm = confirm("You wanna delete this todo ?");
		if (isConfirm) {
			this.removeTodo.emit(id);
		}
	}
}
