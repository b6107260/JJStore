import { Test, TestingModule } from '@nestjs/testing';
import { StorageSecController } from './storage-sec.controller';
import { StorageSecService } from './storage-sec.service';

describe('StorageSecController', () => {
  let controller: StorageSecController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StorageSecController],
      providers: [StorageSecService],
    }).compile();

    controller = module.get<StorageSecController>(StorageSecController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
