import { CreateCarModelDto } from './dto/create-car-model.dto';
import { UpdateCarModelDto } from './dto/update-car-model.dto';

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
import { CarModel } from './entities/car-model.entity';
import { CarBrandService } from '@app/car-brand/car-brand.service';


@Injectable()
export class CarModelService {

  constructor(
    @InjectRepository(CarModel)
    private readonly carmodelRepository: Repository<CarModel>,

    @Inject(CarBrandService)
    private readonly carbrandService: CarBrandService,
  ) { }

  async all() {
    return this.carmodelRepository.find();
  }

  // create(carmodel: CreateCarModelDto): Observable<CarModel> {
  //   return from(this.carmodelRepository.save(carmodel));
  // }

  findOne(id: number): Observable<CarModel> {
    return from(this.carmodelRepository.findOne({ id }));
  }

  findAll(): Observable<CarModel[]> {
    return from(this.carmodelRepository.find());
  }

  deleteOne(id: number): Observable<any> {
    return from(this.carmodelRepository.delete(id));
  }

  updateOne(id: number, detail: CarModel): Observable<any> {
    return from(this.carmodelRepository.update(id, detail));
  }

  createCarModel(car_model: CreateCarModelDto): Observable<CarModel> {
    let newcarmodel: CarModel;
    const { car_brand } =
      car_model;

    const CarBrandExist =
      this.carbrandService.findOne(car_brand);
      
    return forkJoin({
      CarBrandValue: CarBrandExist,

    }).pipe(
      map(({ CarBrandValue }) => {
        if ( CarBrandValue) {
          newcarmodel = new CarModel();
          newcarmodel.description = car_model?.description;
          newcarmodel.code = car_model?.code;
          newcarmodel.note = car_model?.note;
          newcarmodel.status = car_model?.status;
          newcarmodel.car_brand = CarBrandValue;

          this.carmodelRepository.save(newcarmodel).then((res) => {
            console.log(res);
            if (!res) {
              throw new HttpException(
                'can not save carmodel',
                HttpStatus.BAD_REQUEST,
              );
            }
          });
          return newcarmodel;
        } else {
          throw new HttpException(
            'pcarmodel  not found',
            HttpStatus.NOT_FOUND,
          );
        }
      }),
    );
  }
}
