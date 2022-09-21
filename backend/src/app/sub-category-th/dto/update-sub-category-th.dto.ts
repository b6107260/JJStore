import { PartialType } from '@nestjs/mapped-types';
import { CreateSubCategoryThDto } from './create-sub-category-th.dto';

export class UpdateSubCategoryThDto extends PartialType(CreateSubCategoryThDto) {}
