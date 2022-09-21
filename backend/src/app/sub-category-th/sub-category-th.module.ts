import { Module } from '@nestjs/common';
import { SubCategoryThService } from './sub-category-th.service';
import { SubCategoryThController } from './sub-category-th.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { SubCategoryTh } from './entities/sub-category-th.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubCategoryTh])],
  controllers: [SubCategoryThController],
  providers: [SubCategoryThService],
  exports: [SubCategoryThService],
})
export class SubCategoryThModule {}
