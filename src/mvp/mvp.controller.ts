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
import { create } from 'domain';

//Utilizar o controller, evita ter que definir a const service e controller *1
// com o constructor o nest automaticamente instancia ele

@Controller('mvp')
export class MvpsController {
  constructor(private readonly mvpsService: MvpsService) {}

  @Get()
  getMvp(@Query('type') type: 'fire' | 'sacred') {
    //const service = new MvpsService(); *1 (Se torna desnecessario com o constructor)
    return this.mvpsService.getMvps(type);
  }

  @Get(':id')
  getOneMvp(@Param('id') id: string) {
    return this.mvpsService.getMvp(+id);
  }

  @Post()
  createMvp(@Body() createMvpDto: CreateMvpDto) {
    return this.mvpsService.createMvp(createMvpDto);
  }

  @Put(':id')
  updateMvp(@Param('id') id: string, @Body() updateMvpDto: UpdateMvpDto) {
    return this.mvpsService.updateMvp(+id, UpdateMvpDto);
  }

  @Delete(':id')
  deleteMvp(@Param('id') id: string) {
    return this.mvpsService.removeNinja(+id);
  }
}
