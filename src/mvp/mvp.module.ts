import { Module } from '@nestjs/common';
import { MvpsController } from './mvp.controller';
import { MvpsService } from './mvp.service';

@Module({
  controllers: [MvpsController],
  providers: [MvpsService],
})
export class MvpModule {}
