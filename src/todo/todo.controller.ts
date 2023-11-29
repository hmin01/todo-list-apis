import { Controller, Get } from '@nestjs/common';
// Service
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('/list')
  async findAll(): Promise<string> {
    return this.todoService.findAll();
  }
}
