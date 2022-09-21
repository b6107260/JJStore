import { Controller, Get, Post, Body, Patch, Put, Param, Delete } from '@nestjs/common';
import { CarModelService } from './car-model.service';
import { CreateCarModelDto } from './dto/create-car-model.dto';
import { UpdateCarModelDto } from './dto/update-car-model.dto';

import {
  HttpStatus,
  HttpException,
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { catchError, map, Observable, of } from 'rxjs';
import { CarModel } from './entities/car-model.entity';


@ApiTags('car-model')
@Controller('carmodel')
export class CarModelController {
  constructor(private readonly carmodelService: CarModelService) {}

  //สร้างข้อมูลในตาราง CarModel

@Post()
create(@Body() carmodel: CreateCarModelDto ): Observable<CarModel> {
  return this.carmodelService.createCarModel(carmodel).pipe(
    map((data: any) => data),
    catchError((err) => of({ error: err.message })),
  );
}

//รับค่าด้วย id
@Get(':id')
findOne(@Param() params): Observable<CarModel> {
  return this.carmodelService.findOne(params.id);
}
//รับช้อมูลทั้งหมด
@Get()
findAll(): Observable<CarModel[]> {
  return this.carmodelService.findAll();
}

//ลบทีละตัวด้วย id
@Delete(':id')
deleteOne(@Param('id') id: string): Observable<any> {
  return this.carmodelService.deleteOne(Number(id));
}

//อัปเดตข้อมูลด้วย id
@Put(':id')
updateOne(
  @Param('id') id: string,
  @Body() carmodel: CarModel,
): Observable<any> {
  return this.carmodelService.updateOne(Number(id), carmodel);
}
}
