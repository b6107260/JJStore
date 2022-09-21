import { Test, TestingModule } from '@nestjs/testing';
import { SubCategorySecService } from './sub-category-sec.service';

describe('SubCategorySecService', () => {
  let service: SubCategorySecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubCategorySecService],
    }).compile();

    service = module.get<SubCategorySecService>(SubCategorySecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
