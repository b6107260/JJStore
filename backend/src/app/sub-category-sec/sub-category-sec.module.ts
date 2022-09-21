import { Module } from '@nestjs/common';
import { SubCategorySecService } from './sub-category-sec.service';
import { SubCategorySecController } from './sub-category-sec.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { SubCategorySec } from './entities/sub-category-sec.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubCategorySec])],
  controllers: [SubCategorySecController],
  providers: [SubCategorySecService],
  exports: [SubCategorySecService],
})
export class SubCategorySecModule {}
