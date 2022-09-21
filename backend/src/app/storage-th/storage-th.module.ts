import { Module } from '@nestjs/common';
import { StorageThService } from './storage-th.service';
import { StorageThController } from './storage-th.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StorageTh } from './entities/storage-th.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StorageTh])],
  controllers: [StorageThController],
  providers: [StorageThService],
  exports: [StorageThService],
})
export class StorageThModule {}
