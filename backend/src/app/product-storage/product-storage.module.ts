import { Module } from '@nestjs/common';
import { ProductStorageService } from './product-storage.service';
import { ProductStorageController } from './product-storage.controller';
import { ProductStorage } from './entities/product-storage.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StorageFrModule } from '@app/storage-fr/storage-fr.module';
import { StorageSecModule } from '@app/storage-sec/storage-sec.module';
import { StorageThModule } from '@app/storage-th/storage-th.module';
@Module({
  imports: [TypeOrmModule.forFeature([ProductStorage]),
StorageFrModule, StorageSecModule, StorageThModule],
  controllers: [ProductStorageController],
  providers: [ProductStorageService],
  exports: [ProductStorageService],
})
export class ProductStorageModule {}
