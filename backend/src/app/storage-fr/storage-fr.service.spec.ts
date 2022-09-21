import { Test, TestingModule } from '@nestjs/testing';
import { StorageFrService } from './storage-fr.service';

describe('StorageFrService', () => {
  let service: StorageFrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StorageFrService],
    }).compile();

    service = module.get<StorageFrService>(StorageFrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
