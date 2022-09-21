import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateCodeDto {
 
    @ApiProperty()
    readonly id?: number;
    
    @ApiProperty()
    readonly jjCodeNumber: string;

    @ApiProperty()
    readonly partNumber : string;

}
