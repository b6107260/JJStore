
import { CreateSubCategorySecDto } from './dto/create-sub-category-sec.dto';
import { UpdateSubCategorySecDto } from './dto/update-sub-category-sec.dto';


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
import { SubCategorySec } from './entities/sub-category-Sec.entity';

@Injectable()
export class SubCategorySecService {

  constructor(
    @InjectRepository(SubCategorySec)
    private readonly subcategorysecRepository: Repository<SubCategorySec>,
  ) {}
  
  async all() {
    return this.subcategorysecRepository.find();
  }

  // createCategorySec(categorysecstorage : CreateSubCategorySecDto): Observable<SubCategorySec > {
  //   return from(this.subcategorysecRepository.save(categorysecstorage));
  // }

  findOne(id: number): Observable<SubCategorySec > {
    return from(this.subcategorysecRepository.findOne({ id }));
  }

  findAll(): Observable<SubCategorySec []> {
    return from(this.subcategorysecRepository.find());
  }

  deleteOne(id: number): Observable<any> {
    return from(this.subcategorysecRepository.delete(id));
  }

  updateOne(id: number, productstorage : SubCategorySec ): Observable<any> {
    return from(this.subcategorysecRepository.update(id, productstorage ));
  }
  
  createCategorySec(categorysec : CreateSubCategorySecDto): Observable<SubCategorySec > {
    let newcategorysec: SubCategorySec;
    newcategorysec = new SubCategorySec();
    newcategorysec.name = categorysec?.name;
    newcategorysec.note = categorysec?.note;
    newcategorysec.status = categorysec?.status;
    return from (this.subcategorysecRepository.save(newcategorysec))
  }
}
