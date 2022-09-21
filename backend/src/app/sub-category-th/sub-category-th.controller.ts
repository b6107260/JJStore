import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SubCategoryThService } from './sub-category-th.service';
import { CreateSubCategoryThDto } from './dto/create-sub-category-th.dto';
import { UpdateSubCategoryThDto } from './dto/update-sub-category-th.dto';

import {
  HttpStatus,
  HttpException,
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { catchError, map, Observable, of } from 'rxjs';
import { SubCategoryTh } from './entities/sub-category-th.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('sub-category-third')
@Controller('subcategoryth')
export class SubCategoryThController {
  constructor(private readonly subcategorythService: SubCategoryThService) { }

  //สร้างข้อมูลในตาราง Category

  @Post()
  create(@Body() subcategoryth: CreateSubCategoryThDto): Observable<SubCategoryTh> {
    return this.subcategorythService.createCategoryTh(subcategoryth).pipe(
      map((data: any) => data),
      catchError((err) => of({ error: err.message })),
    );
  }

  //รับค่าด้วย id
  @Get(':id')
  findOne(@Param() params): Observable<SubCategoryTh> {
    return this.subcategorythService.findOne(params.id);
  }
  //รับช้อมูลทั้งหมด
  @Get()
  findAll(): Observable<SubCategoryTh[]> {
    return this.subcategorythService.findAll();
  }

  //ลบทีละตัวด้วย id
  @Delete(':id')
  deleteOne(@Param('id') id: string): Observable<any> {
    return this.subcategorythService.deleteOne(Number(id));
  }

  //อัปเดตข้อมูลด้วย id
  @Put(':id')
  updateOne(
    @Param('id') id: string,
    @Body() subcategoryfr: SubCategoryTh,
  ): Observable<any> {
    return this.subcategorythService.updateOne(Number(id), subcategoryfr);
  }
}
