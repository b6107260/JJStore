import { Module } from '@nestjs/common';
import { StorageSecService } from './storage-sec.service';
import { StorageSecController } from './storage-sec.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StorageSec } from './entities/storage-sec.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StorageSec])],
  controllers: [StorageSecController],
  providers: [StorageSecService],
  exports: [StorageSecService],
})
export class StorageSecModule {}
