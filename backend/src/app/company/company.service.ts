import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Repository } from 'typeorm';
import {
  catchError,
  from,
  map,
  Observable,
  switchMap,
  throwError,
  find,
} from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async all() {
    return this.companyRepository.find();
  }

  // create(company: CreateCompanyDto): Observable<Company> {
  //   return from(this.companyRepository.save(company));
  // }

  findOne(id: number): Observable<Company> {
    return from(this.companyRepository.findOne({ id }));
  }

  findAll(): Observable<Company[]> {
    return from(this.companyRepository.find());
  }

  deleteOne(id: number): Observable<any> {
    return from(this.companyRepository.delete(id));
  }

  updateOne(id: number, company: Company): Observable<any> {
    return from(this.companyRepository.update(id, company));
  }

  create(company: CreateCompanyDto): Observable<Company> {
    let newcompanys: Company;
            newcompanys = new Company();           
            newcompanys.name_th = company?.name_th;
            newcompanys.status = company?.status;
            return from(this.companyRepository.save(newcompanys))
  
  
      
  }
}