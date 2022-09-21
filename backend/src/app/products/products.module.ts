import { forwardRef, Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CodeModule } from '@app/code/code.module';
import { UnitModule } from '@app/unit/unit.module';
import { ProductGradeModule } from '@app/product-grade/product-grade.module';
import { SubCategoryFrModule } from '@app/sub-category-fr/sub-category-fr.module';
import { SubCategorySecModule } from '@app/sub-category-sec/sub-category-sec.module';
import { SubCategoryThModule } from '@app/sub-category-th/sub-category-th.module';
import { ProductStorageModule } from '@app/product-storage/product-storage.module';
import { CarBrandModule } from '@app/car-brand/car-brand.module';
import { ProductCompanyModule } from '@app/product-company/product-company.module';


@Module({
  imports: [TypeOrmModule.forFeature([Product]),
  CodeModule, UnitModule, ProductGradeModule, SubCategoryFrModule, 
  SubCategorySecModule, SubCategoryThModule, ProductStorageModule,
  CarBrandModule, forwardRef(() => ProductCompanyModule)],
  
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
