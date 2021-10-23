import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todos, TodosDocument, TODO_STATUS } from './todos.schema';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todos.name) private readonly todosModel: Model<TodosDocument>,
  ) {}

  public async create(todo: CreateTodoDto): Promise<Todos> {
    const newTodo = new this.todosModel({
      name: todo.name,
      status: TODO_STATUS.PENDING,
    });
    return newTodo.save();
  }

  public async fetchTodos(): Promise<Todos[]> {
    return this.todosModel.find({}).exec();
  }

  public async getTodoById(id: string): Promise<Todos> {
    return this.todosModel.findById(id).exec();
  }

  public async deleteTodo(id: string) {
    return this.todosModel.findByIdAndDelete(id);
  }
}
