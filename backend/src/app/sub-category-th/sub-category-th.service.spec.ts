import { Test, TestingModule } from '@nestjs/testing';
import { SubCategoryThService } from './sub-category-th.service';

describe('SubCategoryThService', () => {
  let service: SubCategoryThService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubCategoryThService],
    }).compile();

    service = module.get<SubCategoryThService>(SubCategoryThService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
