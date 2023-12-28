import { Test, TestingModule } from '@nestjs/testing';
import { MvpService } from '../mvp.service';

describe('MvpService', () => {
  let service: MvpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MvpService],
    }).compile();

    service = module.get<MvpService>(MvpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
