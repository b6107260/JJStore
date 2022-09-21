import { Test, TestingModule } from '@nestjs/testing';
import { StorageThService } from './storage-th.service';

describe('StorageThService', () => {
  let service: StorageThService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StorageThService],
    }).compile();

    service = module.get<StorageThService>(StorageThService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
