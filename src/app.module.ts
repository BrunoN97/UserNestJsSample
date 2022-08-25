import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TeacherModule } from './teacher/teacher.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017'), UsersModule, TeacherModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
