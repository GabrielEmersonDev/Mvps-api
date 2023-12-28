import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { CreateMvpDto } from './dto/create-mvp.dto';
import { UpdateMvpDto } from './dto/update-mvp.dto';
import { MvpsService } from './mvp.service';

@Controller('mvp')
export class MvpsController {
  constructor(private readonly mvpsService: MvpsService) {}

  @Get()
  getMvp(@Query('type') type: 'fire' | 'sacred') {
    //const service = new MvpsService();
    return this.mvpsService.getMvps(type);
  }

  @Get(':id')
  getOneMvp(@Param('id') id: string) {
    return {
      id,
    };
  }

  @Post()
  createMvp(@Body() createMvpDto: CreateMvpDto) {
    return {
      name: createMvpDto.name,
    };
  }

  @Put(':id')
  updateMvp(@Param('id') id: string, @Body() updateMvpDto: UpdateMvpDto) {
    return {
      id,
      name: updateMvpDto.name,
    };
  }

  @Delete(':id')
  deleteMvp(@Param('id') id: string) {
    return { id };
  }
}
