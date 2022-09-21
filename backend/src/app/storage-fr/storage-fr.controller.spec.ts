import { Test, TestingModule } from '@nestjs/testing';
import { StorageFrController } from './storage-fr.controller';
import { StorageFrService } from './storage-fr.service';

describe('StorageFrController', () => {
  let controller: StorageFrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StorageFrController],
      providers: [StorageFrService],
    }).compile();

    controller = module.get<StorageFrController>(StorageFrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
