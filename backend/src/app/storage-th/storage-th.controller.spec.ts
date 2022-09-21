import { Test, TestingModule } from '@nestjs/testing';
import { StorageThController } from './storage-th.controller';
import { StorageThService } from './storage-th.service';

describe('StorageThController', () => {
  let controller: StorageThController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StorageThController],
      providers: [StorageThService],
    }).compile();

    controller = module.get<StorageThController>(StorageThController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
