import { PartialType } from '@nestjs/mapped-types';
import { CreateSubCategoryFrDto } from './create-sub-category-fr.dto';

export class UpdateSubCategoryFrDto extends PartialType(CreateSubCategoryFrDto) {}
