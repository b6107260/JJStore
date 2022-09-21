import { CreateProductStorageDto } from './dto/create-product-storage.dto';
import { UpdateProductStorageDto } from './dto/update-product-storage.dto';
import {
  HttpStatus,
  HttpException,
  Injectable,
  ConflictException,
  NotFoundException,
  Inject,
} from '@nestjs/common';
import {
  catchError,
  from,
  map,
  Observable,
  switchMap,
  throwError,
  find,
  forkJoin,
} from 'rxjs';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductStorage } from './entities/product-storage.entity';
import { StorageFrService } from '@app/storage-fr/storage-fr.service';
import { StorageSecService } from '@app/storage-sec/storage-sec.service';
import { StorageThService } from '@app/storage-th/storage-th.service';


@Injectable()
export class ProductStorageService {

  constructor(
    @InjectRepository(ProductStorage)
    private readonly productstorageRepository: Repository<ProductStorage>,

    @Inject(StorageFrService)
    private readonly storagefrService: StorageFrService,

    @Inject(StorageSecService)
    private readonly storagesecService: StorageSecService,

    @Inject(StorageThService)
    private readonly storagethService: StorageThService,
  ) { }

  async all() {
    return this.productstorageRepository.find();
  }

  // create(productstorage : CreateProductStorageDto ): Observable<any> {
  //   return from(this.productstorageRepository.save(productstorage));
  // }

  findOne(id: number): Observable<ProductStorage> {
    return from(this.productstorageRepository.findOne({ id }));
  }

  findAll(): Observable<ProductStorage[]> {
    return from(this.productstorageRepository.find());
  }

  deleteOne(id: number): Observable<any> {
    return from(this.productstorageRepository.delete(id));
  }

  updateOne(id: number, productstorage: ProductStorage): Observable<any> {
    return from(this.productstorageRepository.update(id, productstorage));
  }

  createProductStorage(productstorage: any): Observable<any> {
    let newproductstorage: ProductStorage;
  
    console.log("value",newproductstorage)
    const StorageFrExist =
      this.storagefrService.findOne(productstorage.storage_fr);
    const StorageSecExist =
      this.storagesecService.findOne(productstorage.storage_sec);
    const StorageThExist =
      this.storagethService.findOne(productstorage.storage_th);
    return forkJoin({
      StorageFrValue: StorageFrExist,
      StorageSecValue: StorageSecExist,
      StorageThValue: StorageThExist,
    }).pipe(
      map(({ StorageFrValue, StorageSecValue, StorageThValue }) => {
        if (StorageFrValue && StorageSecValue && StorageThValue) {
          newproductstorage = new ProductStorage();
          newproductstorage.storage_th = StorageThValue;
          newproductstorage.storage_sec = StorageSecValue;
          newproductstorage.storage_fr = StorageFrValue;
          // newproductstorage.status = productstorage?.status;

          this.productstorageRepository.save(newproductstorage).then((res) => {
            
            if (!res) {
              throw new HttpException(
                'can not save productstorage',
                HttpStatus.BAD_REQUEST,
              );
            }
          });
          return newproductstorage;
        } else {
          throw new HttpException(
            'productstorage  not found',
            HttpStatus.NOT_FOUND,
          );
        }
      }),
    );
  }

}
