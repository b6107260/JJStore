import { Test, TestingModule } from '@nestjs/testing';
import { SubCategorySecController } from './sub-category-sec.controller';
import { SubCategorySecService } from './sub-category-sec.service';

describe('SubCategorySecController', () => {
  let controller: SubCategorySecController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubCategorySecController],
      providers: [SubCategorySecService],
    }).compile();

    controller = module.get<SubCategorySecController>(SubCategorySecController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
