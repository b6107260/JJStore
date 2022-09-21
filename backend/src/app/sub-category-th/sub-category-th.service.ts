import { CreateSubCategoryThDto } from './dto/create-sub-category-th.dto';
import { UpdateSubCategoryThDto } from './dto/update-sub-category-th.dto';


import {
  HttpStatus,
  HttpException,
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import {
  catchError,
  from,
  map,
  Observable,
  switchMap,
  throwError,
  find,
} from 'rxjs';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SubCategoryTh } from './entities/sub-category-th.entity';

@Injectable()
export class SubCategoryThService {

  constructor(
    @InjectRepository(SubCategoryTh)
    private readonly subcategorythRepository: Repository<SubCategoryTh>,
  ) {}
  
  async all() {
    return this.subcategorythRepository.find();
  }

  // create(categorysecstorage : CreateSubCategoryThDto): Observable<SubCategoryTh > {
  //   return from (this.subcategorysecRepository.save(newcategorysec))
  // }

  findOne(id: number): Observable<SubCategoryTh > {
    return from(this.subcategorythRepository.findOne({ id }));
  }

  findAll(): Observable<SubCategoryTh []> {
    return from(this.subcategorythRepository.find());
  }

  deleteOne(id: number): Observable<any> {
    return from(this.subcategorythRepository.delete(id));
  }

  updateOne(id: number, productstorage : SubCategoryTh ): Observable<any> {
    return from(this.subcategorythRepository.update(id, productstorage ));
  }

  createCategoryTh(categoryth : CreateSubCategoryThDto): Observable<SubCategoryTh > {
    let newcategoryth: SubCategoryTh;
    newcategoryth = new SubCategoryTh();
    newcategoryth.name = categoryth?.name;
    newcategoryth.note = categoryth?.note;
    newcategoryth.status = categoryth?.status;
    return from (this.subcategorythRepository.save(newcategoryth))
  }
}