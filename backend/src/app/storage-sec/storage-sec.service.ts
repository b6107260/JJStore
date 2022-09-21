import { CreateStorageSecDto } from './dto/create-storage-sec.dto';
import { UpdateStorageSecDto } from './dto/update-storage-sec.dto';
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
import { StorageSec } from './entities/storage-sec.entity';

@Injectable()
export class StorageSecService {

  constructor(
    @InjectRepository(StorageSec)
    private readonly storagesecRepository: Repository<StorageSec>,
  ) {}
  
  async all() {
    return this.storagesecRepository.find();
  }

  // create(storagesecstorage : CreateStorageSecDto): Observable<StorageSec > {
  //   return from(this.storagesecRepository.save(storagesecstorage));
  // }

  findOne(id: number): Observable<StorageSec > {
    return from(this.storagesecRepository.findOne({ id }));
  }

  findAll(): Observable<StorageSec []> {
    return from(this.storagesecRepository.find());
  }

  deleteOne(id: number): Observable<any> {
    return from(this.storagesecRepository.delete(id));
  }

  updateOne(id: number, productstorage : StorageSec ): Observable<any> {
    return from(this.storagesecRepository.update(id, productstorage ));
  }

  create(storagesec : CreateStorageSecDto): Observable<StorageSec > {
    let newstoragesec: StorageSec;
    newstoragesec = new StorageSec();
    newstoragesec.name = storagesec?.name;
    newstoragesec.note = storagesec?.note;
    newstoragesec.status = storagesec?.status;
   return from (this.storagesecRepository.save(newstoragesec))
  }
}