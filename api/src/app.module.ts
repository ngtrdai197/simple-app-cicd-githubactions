import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      "'mongodb+srv://ngtrdai197:drYHxsYlLiB1nYY5@clusterdemo.mx6zs.mongodb.net/simple-todo-app?retryWrites=true&w=majority'",
    ),
    TodosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
