import { Body, Injectable } from '@nestjs/common';
import { error } from 'console';
import { CreateMvpDto } from './dto/create-mvp.dto';
import { UpdateMvpDto } from './dto/update-mvp.dto';
import { mvp } from './entities/mvp.entity';

@Injectable()
export class MvpsService {
  private mvps = [
    { id: 0, name: 'Golden Thief Bug', type: 'fire', size: 'medium' },
    { id: 1, name: 'Valquíria Randgris', type: 'sacred', size: 'great' },
  ];

  getMvps(type?: 'fire' | 'sacred') {
    if (type) {
      return this.mvps.filter((mvp) => mvp.type === type);
    }
    return this.mvps;
  }

  getMvp(id: number) {
    const mvp = this.mvps.find((mvp) => mvp.id === id);

    if (!mvp) {
      throw new error('Mvp not found');
    }
    return mvp;
  }
  createMvp(createMvpDto: CreateMvpDto) {
    const newMvp = {
      ...createMvpDto,
      id: Date.now(),
    };
    this.mvps.push(newMvp);

    return newMvp;
  }

  updateMvp(id: number, updateMvpDto: UpdateMvpDto) {
    this.mvps = this.mvps.map((mvp) => {
      if (mvp.id === id) {
        return { ...mvp, ...updateMvpDto };
      }

      return mvp;
    });

    return this.getMvp(id);
  }

  removeNinja(id: number) {
    const toBeRemoved = this.getMvp(id);

    this.mvps = this.mvps.filter((mvp) => mvp.id !== id);

    return toBeRemoved;
  }
}
