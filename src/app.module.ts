import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MvpModule } from './mvp/mvp.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MvpModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
