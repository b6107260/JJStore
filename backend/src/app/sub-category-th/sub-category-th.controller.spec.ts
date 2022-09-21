import { Test, TestingModule } from '@nestjs/testing';
import { SubCategoryThController } from './sub-category-th.controller';
import { SubCategoryThService } from './sub-category-th.service';

describe('SubCategoryThController', () => {
  let controller: SubCategoryThController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubCategoryThController],
      providers: [SubCategoryThService],
    }).compile();

    controller = module.get<SubCategoryThController>(SubCategoryThController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
