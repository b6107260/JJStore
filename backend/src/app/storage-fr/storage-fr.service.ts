import { CreateStorageFrDto } from './dto/create-storage-fr.dto';
import { UpdateStorageFrDto } from './dto/update-storage-fr.dto';

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
import { StorageFr } from './entities/storage-fr.entity';

@Injectable()
export class StorageFrService {

  constructor(
    @InjectRepository(StorageFr)
    private readonly storagefrRepository: Repository<StorageFr>,
  ) {}
  
  async all() {
    return this.storagefrRepository.find();
  }

  // create(storagefrstorage : CreateStorageFrDto): Observable<StorageFr > {
  //   return from(this.storagefrRepository.save(storagefrstorage));
  // }

  findOne(id: number): Observable<StorageFr > {
    return from(this.storagefrRepository.findOne({ id }));
  }

  findAll(): Observable<StorageFr []> {
    return from(this.storagefrRepository.find());
  }

  deleteOne(id: number): Observable<any> {
    return from(this.storagefrRepository.delete(id));
  }

  updateOne(id: number, productstorage : StorageFr ): Observable<any> {
    return from(this.storagefrRepository.update(id, productstorage ));
  }

  create(storagefr : CreateStorageFrDto): Observable<StorageFr > {
    let newstoragefr: StorageFr;
    newstoragefr = new StorageFr();
    newstoragefr.name = storagefr?.name;
    newstoragefr.note = storagefr?.note;
    newstoragefr.status = storagefr?.status;
   return from (this.storagefrRepository.save(newstoragefr))
  }
}