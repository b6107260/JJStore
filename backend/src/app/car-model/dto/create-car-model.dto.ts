import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateCarModelDto {
    @IsNotEmpty()
    @ApiProperty()
    readonly id: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly description: string;

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
    readonly car_brand: number;

    
    

}
