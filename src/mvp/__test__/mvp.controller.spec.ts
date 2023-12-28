import { Test, TestingModule } from '@nestjs/testing';
import { MvpController } from '../mvp.controller';

describe('MvpController', () => {
  let controller: MvpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MvpController],
    }).compile();

    controller = module.get<MvpController>(MvpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
