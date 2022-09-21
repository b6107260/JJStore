import { Module } from '@nestjs/common';
import { CarModelService } from './car-model.service';
import { CarModelController } from './car-model.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModel } from './entities/car-model.entity';
import { CarBrandModule } from '@app/car-brand/car-brand.module';

@Module({
  imports: [TypeOrmModule.forFeature([CarModel]),
  CarBrandModule],
  controllers: [CarModelController],
  providers: [CarModelService],
  exports: [CarModelService],
})
export class CarModelModule {}
