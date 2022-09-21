import { Test, TestingModule } from '@nestjs/testing';
import { SubCategoryFrService } from './sub-category-fr.service';

describe('SubCategoryFrService', () => {
  let service: SubCategoryFrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubCategoryFrService],
    }).compile();

    service = module.get<SubCategoryFrService>(SubCategoryFrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
