
import { CreateSubCategoryFrDto } from './dto/create-sub-category-fr.dto';
import { UpdateSubCategoryFrDto } from './dto/update-sub-category-fr.dto';


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
import { SubCategoryFr } from './entities/sub-category-fr.entity';

@Injectable()
export class SubCategoryFrService {

  constructor(
    @InjectRepository(SubCategoryFr)
    private readonly subcategoryfrRepository: Repository<SubCategoryFr>,
  ) { }

  async all() {
    return this.subcategoryfrRepository.find();
  }

  // create(categoryfrstorage : CreateSubCategoryFrDto): Observable<SubCategoryFr > {
  //   return from(this.subcategoryfrRepository.save(categoryfrstorage));
  // }

  findOne(id: number): Observable<SubCategoryFr> {
    return from(this.subcategoryfrRepository.findOne({ id }));
  }

  findAll(): Observable<SubCategoryFr[]> {
    return from(this.subcategoryfrRepository.find());
  }

  deleteOne(id: number): Observable<any> {
    return from(this.subcategoryfrRepository.delete(id));
  }

  updateOne(id: number, productstorage: SubCategoryFr): Observable<any> {
    return from(this.subcategoryfrRepository.update(id, productstorage));
  }

  create(categoryfr: CreateSubCategoryFrDto): Observable<SubCategoryFr> {
    let newcategoryfr: SubCategoryFr;
    newcategoryfr = new SubCategoryFr();
    newcategoryfr.name = categoryfr?.name;
    newcategoryfr.note = categoryfr?.note;
    newcategoryfr.status = categoryfr?.status;
    return from(this.subcategoryfrRepository.save(newcategoryfr))
  }
}
