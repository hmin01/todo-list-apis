import { Module } from '@nestjs/common';
// Sub-modules
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
