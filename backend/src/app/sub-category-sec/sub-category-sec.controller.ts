import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SubCategorySecService } from './sub-category-sec.service';
import { CreateSubCategorySecDto } from './dto/create-sub-category-sec.dto';
import { UpdateSubCategorySecDto } from './dto/update-sub-category-sec.dto';

import {
  HttpStatus,
  HttpException,
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { catchError, map, Observable, of } from 'rxjs';
import { SubCategorySec } from './entities/sub-category-sec.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('sub-category-second')
@Controller('subcategorysec')
export class SubCategorySecController {
  constructor(private readonly subcategorysecService: SubCategorySecService) {}

  //สร้างข้อมูลในตาราง Category

@Post()
create(@Body() subcategorysec: CreateSubCategorySecDto): Observable<SubCategorySec> {
  return this.subcategorysecService.createCategorySec(subcategorysec).pipe(
    map((data: any) => data),
    catchError((err) => of({ error: err.message })),
  );
}

//รับค่าด้วย id
@Get(':id')
findOne(@Param() params): Observable<SubCategorySec> {
  return this.subcategorysecService.findOne(params.id);
}
//รับช้อมูลทั้งหมด
@Get()
findAll(): Observable<SubCategorySec[]> {
  return this.subcategorysecService.findAll();
}

//ลบทีละตัวด้วย id
@Delete(':id')
deleteOne(@Param('id') id: string): Observable<any> {
  return this.subcategorysecService.deleteOne(Number(id));
}

//อัปเดตข้อมูลด้วย id
@Put(':id')
updateOne(
  @Param('id') id: string,
  @Body() subcategorysec: SubCategorySec,
): Observable<any> {
  return this.subcategorysecService.updateOne(Number(id), subcategorysec);
}
}
