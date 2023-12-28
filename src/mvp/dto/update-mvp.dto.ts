import { PartialType } from '@nestjs/mapped-types';
import { CreateMvpDto } from './create-mvp.dto';

export class UpdateMvpDto extends PartialType(CreateMvpDto) {}
