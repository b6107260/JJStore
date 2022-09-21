import { PartialType } from '@nestjs/mapped-types';
import { CreateStorageSecDto } from './create-storage-sec.dto';

export class UpdateStorageSecDto extends PartialType(CreateStorageSecDto) {}
