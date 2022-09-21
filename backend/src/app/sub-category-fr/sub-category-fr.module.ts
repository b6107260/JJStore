import { Module } from '@nestjs/common';
import { SubCategoryFrService } from './sub-category-fr.service';
import { SubCategoryFrController } from './sub-category-fr.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { SubCategoryFr } from './entities/sub-category-fr.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubCategoryFr])],
  controllers: [SubCategoryFrController],
  providers: [SubCategoryFrService],
  exports: [SubCategoryFrService],
})
export class SubCategoryFrModule {}
