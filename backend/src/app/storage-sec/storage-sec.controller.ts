import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { StorageSecService } from './storage-sec.service';
import { CreateStorageSecDto } from './dto/create-storage-sec.dto';
import { UpdateStorageSecDto } from './dto/update-storage-sec.dto';
import {
  HttpStatus,
  HttpException,
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { catchError, map, Observable, of } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';
import { StorageSec } from './entities/storage-sec.entity';

@ApiTags('storage-second')
@Controller('storage-sec')
export class StorageSecController {
  constructor(private readonly storageSecService: StorageSecService) {}

  //สร้างข้อมูลในตาราง storage second (โซน)
  @Post()
  create(@Body() storageSec: CreateStorageSecDto): Observable<StorageSec> {
    return this.storageSecService.create(storageSec).pipe(
      map((data: any) => data),
      catchError((err) => of({ error: err.message })),
    );
  }

  //รับค่าด้วย id
  @Get(':id')
  findOne(@Param() params): Observable<StorageSec> {
    return this.storageSecService.findOne(params.id);
  }

  //รับช้อมูลทั้งหมด
  @Get()
  findAll(): Observable<StorageSec[]> {
    return this.storageSecService.findAll();
  }

  //ลบทีละตัวด้วย id
  @Delete(':id')
  deleteOne(@Param('id') id: string): Observable<any> {
    return this.storageSecService.deleteOne(Number(id));
  }

  //อัปเดตข้อมูลด้วย id
  @Put(':id')
  updateOne(
    @Param('id') id: string,
    @Body() storageSec: StorageSec,
  ): Observable<any> {
    return this.storageSecService.updateOne(Number(id), storageSec);
  }
}
