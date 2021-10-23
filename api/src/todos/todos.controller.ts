import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  public async fetchTodos() {
    return this.todosService.fetchTodos();
  }
  @Get(':id')
  public async getTodoByIdÎ(@Param('id') id: string) {
    return this.todosService.getTodoById(id);
  }

  @Post()
  public async craeteTodo(@Body() todo: CreateTodoDto) {
    return this.todosService.create(todo);
  }

  @Delete(':id')
  public async deleteTodo(@Param('id') id: string) {
    return this.todosService.deleteTodo(id);
  }
}
