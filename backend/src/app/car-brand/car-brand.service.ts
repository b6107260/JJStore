import { CreateCarBrandDto } from './dto/create-car-brand.dto';
import { UpdateCarBrandDto } from './dto/update-car-brand.dto';
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
import { CarBrand } from './entities/car-brand.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CarBrandService {
  constructor(
    @InjectRepository(CarBrand)
    private readonly carbrandRepository: Repository<CarBrand>,
  ) {}

  async all() {
    return this.carbrandRepository.find();
  }

  create(carbrand: CreateCarBrandDto): Observable<CarBrand> {


    return from(this.carbrandRepository.save(carbrand));
  }

  findOne(id: number): Observable<CarBrand> {
    return from(this.carbrandRepository.findOne({ id }));
  }

  findAll(): Observable<CarBrand[]> {
    return from(this.carbrandRepository.find());
  }

  deleteOne(id: number): Observable<any> {
    return from(this.carbrandRepository.delete(id));
  }

  updateOne(id: number, carbrand: CarBrand): Observable<any> {
    return from(this.carbrandRepository.update(id, carbrand));
  }
}
