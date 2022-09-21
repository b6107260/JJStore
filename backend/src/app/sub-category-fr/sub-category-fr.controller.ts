import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SubCategoryFrService } from './sub-category-fr.service';
import { CreateSubCategoryFrDto } from './dto/create-sub-category-fr.dto';
import { UpdateSubCategoryFrDto } from './dto/update-sub-category-fr.dto';

import {
  HttpStatus,
  HttpException,
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { catchError, map, Observable, of } from 'rxjs';
import { SubCategoryFr } from './entities/sub-category-fr.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('sub-category-first')
@Controller('subcategoryfr')
export class SubCategoryFrController {
  constructor(private readonly subcategoryfrService: SubCategoryFrService) { }

  //สร้างข้อมูลในตาราง Category

  @Post()
  create(@Body() subcategoryfr: CreateSubCategoryFrDto): Observable<SubCategoryFr> {
    return this.subcategoryfrService.create(subcategoryfr).pipe(
      map((data: any) => data),
      catchError((err) => of({ error: err.message })),
    );
  }

  //รับค่าด้วย id
  @Get(':id')
  findOne(@Param() params): Observable<SubCategoryFr> {
    return this.subcategoryfrService.findOne(params.id);
  }
  //รับช้อมูลทั้งหมด
  @Get()
  findAll(): Observable<SubCategoryFr[]> {
    return this.subcategoryfrService.findAll();
  }

  //ลบทีละตัวด้วย id
  @Delete(':id')
  deleteOne(@Param('id') id: string): Observable<any> {
    return this.subcategoryfrService.deleteOne(Number(id));
  }

  //อัปเดตข้อมูลด้วย id
  @Put(':id')
  updateOne(
    @Param('id') id: string,
    @Body() subcategoryfr: SubCategoryFr,
  ): Observable<any> {
    return this.subcategoryfrService.updateOne(Number(id), subcategoryfr);
  }
}
