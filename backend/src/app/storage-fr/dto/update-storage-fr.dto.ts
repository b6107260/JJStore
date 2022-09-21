import { PartialType } from '@nestjs/mapped-types';
import { CreateStorageFrDto } from './create-storage-fr.dto';

export class UpdateStorageFrDto extends PartialType(CreateStorageFrDto) {}
