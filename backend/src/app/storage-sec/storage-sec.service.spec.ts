import { Test, TestingModule } from '@nestjs/testing';
import { StorageSecService } from './storage-sec.service';

describe('StorageSecService', () => {
  let service: StorageSecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StorageSecService],
    }).compile();

    service = module.get<StorageSecService>(StorageSecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
