import { Module } from '@nestjs/common';
import { StorageFrService } from './storage-fr.service';
import { StorageFrController } from './storage-fr.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StorageFr } from './entities/storage-fr.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StorageFr])],
  controllers: [StorageFrController],
  providers: [StorageFrService],
  exports: [StorageFrService],
})
export class StorageFrModule {}
