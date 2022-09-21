import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './lib/config/server';
import { validationSchema } from './lib/config/validation';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './lib/config/database';
import { EmployeeModule } from './app/employee/employee.module';
import { ProductsModule } from './app/products/products.module';
import { AuthModule } from './auth/auth.module';
import { PrivilegeModule } from './app/privilege/privilege.module';
import { RoleModule } from './app/role/role.module';
import { CompanyModule } from './app/company/company.module';
import { ProductGradeModule } from '@app/product-grade/product-grade.module';

import { CodeModule } from '@app/code/code.module';
import { UnitModule } from '@app/unit/unit.module';
import { OrderDetailModule } from '@app/order-detail/order-detail.module';
import { ProductOrderModule } from '@app/product-order/product-order.module';
import { ProductStorageModule } from '@app/product-storage/product-storage.module';
import { SubCategoryFrModule } from './app/sub-category-fr/sub-category-fr.module';
import { SubCategorySecModule } from './app/sub-category-sec/sub-category-sec.module';
import { SubCategoryThModule } from './app/sub-category-th/sub-category-th.module';
import { CarModelModule } from './app/car-model/car-model.module';
import { CarBrandModule } from '@app/car-brand/car-brand.module';
import { StorageFrModule } from './app/storage-fr/storage-fr.module';
import { StorageSecModule } from './app/storage-sec/storage-sec.module';
import { StorageThModule } from './app/storage-th/storage-th.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema: validationSchema,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: config,
      inject: [],
    }),

    EmployeeModule,
    ProductsModule,
    AuthModule,
    PrivilegeModule,
    RoleModule,
    CompanyModule,
    ProductGradeModule,
    CodeModule,
    UnitModule,
    OrderDetailModule,
    ProductOrderModule,
    ProductStorageModule,
    SubCategoryFrModule,
    SubCategorySecModule,
    SubCategoryThModule,
    CarModelModule ,
    CarBrandModule,
    StorageFrModule,
    StorageSecModule,
    StorageThModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// bank ไม่ได้ import
