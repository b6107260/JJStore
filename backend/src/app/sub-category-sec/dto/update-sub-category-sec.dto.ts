import { PartialType } from '@nestjs/mapped-types';
import { CreateSubCategorySecDto } from './create-sub-category-sec.dto';

export class UpdateSubCategorySecDto extends PartialType(CreateSubCategorySecDto) {}
