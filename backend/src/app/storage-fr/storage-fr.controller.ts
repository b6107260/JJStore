import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { StorageFrService } from './storage-fr.service';
import { CreateStorageFrDto } from './dto/create-storage-fr.dto';
import { UpdateStorageFrDto } from './dto/update-storage-fr.dto';

import {
  HttpStatus,
  HttpException,
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { catchError, map, Observable, of } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';
import { StorageFr } from './entities/storage-fr.entity';

@ApiTags('storage-first')
@Controller('storage-fr')
export class StorageFrController {
  constructor(private readonly storageFrService: StorageFrService) { }

  //สร้างข้อมูลในตาราง storage first (ตู้)
  @Post()
  create(@Body() storageFr: CreateStorageFrDto): Observable<StorageFr> {
    return this.storageFrService.create(storageFr).pipe(
      map((data: any) => data),
      catchError((err) => of({ error: err.message })),
    );
  }

  //รับค่าด้วย id
  @Get(':id')
  findOne(@Param() params): Observable<StorageFr> {
    return this.storageFrService.findOne(params.id);
  }

  //รับช้อมูลทั้งหมด
  @Get()
  findAll(): Observable<StorageFr[]> {
    return this.storageFrService.findAll();
  }

  //ลบทีละตัวด้วย id
  @Delete(':id')
  deleteOne(@Param('id') id: string): Observable<any> {
    return this.storageFrService.deleteOne(Number(id));
  }

  //อัปเดตข้อมูลด้วย id
  @Put(':id')
  updateOne(
    @Param('id') id: string,
    @Body() storageFr: StorageFr,
  ): Observable<any> {
    return this.storageFrService.updateOne(Number(id), storageFr);
  }
}
