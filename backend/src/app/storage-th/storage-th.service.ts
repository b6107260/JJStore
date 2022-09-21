import { CreateStorageThDto } from './dto/create-storage-th.dto';
import { UpdateStorageThDto } from './dto/update-storage-th.dto';
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
import { StorageTh } from './entities/storage-th.entity';

@Injectable()
export class StorageThService {
  constructor(
    @InjectRepository(StorageTh)
    private readonly storagethRepository: Repository<StorageTh>,
  ) {}
  
  async all() {
    return this.storagethRepository.find();
  }

  // create(storagethstorage : CreateStorageThDto): Observable<StorageTh > {
  //   return from(this.storagethRepository.save(storagethstorage));
  // }

  findOne(id: number): Observable<StorageTh > {
    return from(this.storagethRepository.findOne({ id }));
  }

  findAll(): Observable<StorageTh []> {
    return from(this.storagethRepository.find());
  }

  deleteOne(id: number): Observable<any> {
    return from(this.storagethRepository.delete(id));
  }

  updateOne(id: number, productstorage : StorageTh ): Observable<any> {
    return from(this.storagethRepository.update(id, productstorage ));
  }

  create(storageth : CreateStorageThDto): Observable<StorageTh> {
    let newstorageth: StorageTh;
    newstorageth = new StorageTh();
    newstorageth.name = storageth?.name;
    newstorageth.note = storageth?.note;
    newstorageth.status = storageth?.status;
   return from (this.storagethRepository.save(newstorageth))
  }
}
