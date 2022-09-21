import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateProductStorageDto {

    @IsNotEmpty()
    @ApiProperty()
    readonly storage_fr: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly storage_sec: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly storage_th: number;

    // @IsNotEmpty()
    // @ApiProperty()
    // readonly status: string;
}
