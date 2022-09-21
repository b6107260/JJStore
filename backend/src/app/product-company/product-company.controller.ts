
import { ProductCompanyService } from './product-company.service';
import { CreateProductCompanyDto } from './dto/create-product-company.dto';
import { UpdateProductCompanyDto } from './dto/update-product-company.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import{
  HttpStatus,
  HttpException,
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { catchError, map, Observable, of,switchMap } from 'rxjs';
import { ProductCompany } from './entities/product-company.entity';

@ApiTags('product-company')
@Controller('product-company')
export class ProductCompanyController {
  constructor(private readonly productCompanyService: ProductCompanyService) {}

      
    //สร้างข้อมูลในตาราง Product_company
    @Post()
    create(@Body() productcompany: CreateProductCompanyDto): Observable<any> {
      return this.productCompanyService.createProdcutCompany(productcompany).pipe(
        map((data: any) => data),
        catchError((err) => of({ error: err.message })),
      );
    }
   
   //รับค่าด้วย id
    @Get(':id')
    findOne(@Param() params): Observable<ProductCompany> {
      return this.productCompanyService.findOne(params.id);
    }

   //รับข้อมูลทั้งหมด
    @Get()
    findAll(): Observable<ProductCompany[]> {
      return this.productCompanyService.findAll();
    }
  
    //ลบทีละตัวด้วย id
    @Delete(':id')
    deleteOne(@Param('id') id: string): Observable<any> {
      return this.productCompanyService.deleteOne(Number(id));
    }
  
    //อัปเดตข้อมูลด้วย id
    @Put(':id')
    updateOne(
      @Param('id') id: string,
      @Body() productcompany: ProductCompany,
    ): Observable<any> {
      return this.productCompanyService.updateOne(Number(id), productcompany);
    }

     @Put()

  async updateNew(@Body() productcompany: any, ) {

    console.log("update",productcompany)

    return  this.productCompanyService.updateProductNew(productcompany)

  }


}
