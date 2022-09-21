import { forwardRef, Module } from '@nestjs/common';
import { ProductCompanyService } from './product-company.service';
import { ProductCompanyController } from './product-company.controller';
import { ProductCompany } from './entities/product-company.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from '@app/products/products.module';
import { CompanyModule } from '@app/company/company.module';


@Module({
  imports: [TypeOrmModule.forFeature([ProductCompany]),
  forwardRef(() => ProductsModule), CompanyModule],
  controllers: [ProductCompanyController],
  providers: [ProductCompanyService],
  exports: [ProductCompanyService],
})
export class ProductCompanyModule { }
