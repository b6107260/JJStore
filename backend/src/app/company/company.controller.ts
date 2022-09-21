import { Controller, Get, Post, Body, Patch, Param, Put, Delete } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import {
  HttpStatus,
  HttpException,
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { catchError, map, Observable, of } from 'rxjs';
import { Company } from './entities/company.entity';

@ApiTags('company')
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

 
    //สร้างข้อมูลในตาราง Company
    @Post()
    create(@Body() company: CreateCompanyDto): Observable<Company> {
      return this.companyService.create(company).pipe(
        map((data: any) => data),
        catchError((err) => of({ error: err.message })),
      );
    }
   
  //รับค่าด้วย id
    @Get(':id')
    findOne(@Param() params): Observable<Company> {
      return this.companyService.findOne(params.id);
    }
  //รับช้อมูลทั้งหมด
    @Get()
    findAll(): Observable<Company[]> {
      return this.companyService.findAll();
    }
  
    //ลบทีละตัวด้วย id
    @Delete(':id')
    deleteOne(@Param('id') id: string): Observable<any> {
      return this.companyService.deleteOne(Number(id));
    }
  
    //อัปเดตข้อมูลด้วย id
    @Put(':id')
    updateOne(
      @Param('id') id: string,
      @Body() company: Company,
    ): Observable<any> {
      return this.companyService.updateOne(Number(id), company);
    }
}
