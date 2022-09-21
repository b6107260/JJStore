import { PartialType } from '@nestjs/mapped-types';
import { CreateStorageThDto } from './create-storage-th.dto';

export class UpdateStorageThDto extends PartialType(CreateStorageThDto) {}
