import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { StorageThService } from './storage-th.service';
import { CreateStorageThDto } from './dto/create-storage-th.dto';
import { UpdateStorageThDto } from './dto/update-storage-th.dto';
import {
  HttpStatus,
  HttpException,
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { catchError, map, Observable, of } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';
import { StorageTh } from './entities/storage-th.entity';

@ApiTags('storage-third')
@Controller('storage-th')
export class StorageThController {
  constructor(private readonly storageThService: StorageThService) {}

  //สร้างข้อมูลในตาราง storage second (ชั้น)
  @Post()
  create(@Body() storageTh: CreateStorageThDto): Observable<StorageTh> {
    return this.storageThService.create(storageTh).pipe(
      map((data: any) => data),
      catchError((err) => of({ error: err.message })),
    );
  }

  //รับค่าด้วย id
  @Get(':id')
  findOne(@Param() params): Observable<StorageTh> {
    return this.storageThService.findOne(params.id);
  }

  //รับช้อมูลทั้งหมด
  @Get()
  findAll(): Observable<StorageTh[]> {
    return this.storageThService.findAll();
  }

  //ลบทีละตัวด้วย id
  @Delete(':id')
  deleteOne(@Param('id') id: string): Observable<any> {
    return this.storageThService.deleteOne(Number(id));
  }

  //อัปเดตข้อมูลด้วย id
  @Put(':id')
  updateOne(
    @Param('id') id: string,
    @Body() storageTh: StorageTh,
  ): Observable<any> {
    return this.storageThService.updateOne(Number(id), storageTh);
  }
}
