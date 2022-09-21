import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductCompanyDto {
    @IsNotEmpty()
    @ApiProperty()
    readonly id: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly product_company_name: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly code: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly note: string;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly status: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly products: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly company: number;
    readonly name_th: string;
}
    
