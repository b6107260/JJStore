import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { Product_grade } from '@app/product-grade/entities/product-grade.entity';
import { ProductCompany } from '@app/product-company/entities/product-company.entity';
import { Code } from '@app/code/entities/code.entity';
import { Unit } from '@app/unit/entities/unit.entity';
import { CreateProductStorageDto } from '@app/product-storage/dto/create-product-storage.dto';

export class CreateProductDto {

    @IsNotEmpty()
    @ApiProperty()
    readonly name: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly price_sell: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly price: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly limit_amount: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly amount: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly status: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly code: number;
    readonly jjCodeNumber: string;
    readonly partNumber: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly unit: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly car_brand: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly product_grade: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly product_storage: CreateProductStorageDto;
   

    @IsNotEmpty()
    @ApiProperty()
    readonly category_fr : number;

    @IsNotEmpty()
    @ApiProperty()
    readonly category_sec : number;

    @IsNotEmpty()
    @ApiProperty()
    readonly category_th : number;
}