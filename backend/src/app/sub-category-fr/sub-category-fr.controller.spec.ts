import { Test, TestingModule } from '@nestjs/testing';
import { SubCategoryFrController } from './sub-category-fr.controller';
import { SubCategoryFrService } from './sub-category-fr.service';

describe('SubCategoryFrController', () => {
  let controller: SubCategoryFrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubCategoryFrController],
      providers: [SubCategoryFrService],
    }).compile();

    controller = module.get<SubCategoryFrController>(SubCategoryFrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
