import {
  HttpStatus,
  HttpException,
  Injectable,
  ConflictException,
  NotFoundException,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { Repository } from 'typeorm';
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
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductCompanyDto } from './dto/create-product-company.dto';
import { UpdateProductCompanyDto } from './dto/update-product-company.dto';
import { ProductCompany } from './entities/product-company.entity';
import { ProductsService } from '@app/products/products.service';
import { CompanyService } from '@app/company/company.service';
import { Product } from '@app/products/entities/product.entity';


@Injectable()
export class ProductCompanyService {
  constructor(
    @InjectRepository(ProductCompany)
    private readonly ProductCompanyRepository: Repository<ProductCompany>,

    @Inject(forwardRef(() => ProductsService))
    private readonly productService: ProductsService,

    @Inject(CompanyService)
    private readonly companyService: CompanyService,

  ) { }

  async all() {
    return this.ProductCompanyRepository.find();
  }

  // create(productcompany: CreateProductCompanyDto): Observable<any> {
  //   return from(this.ProductCompanyRepository.save(productcompany));
  // }

  findOne(id: number): Observable<ProductCompany> {
    return from(this.ProductCompanyRepository.findOne({ id }));
  }

  findAll(): Observable<ProductCompany[]> {
    return from(this.ProductCompanyRepository.createQueryBuilder("product_company")
      .leftJoinAndSelect("product_company.company", "company")
      .leftJoinAndSelect("product_company.products", "products")
      .getMany());
  }

  findNew(id: number): Observable<any[]> {
    return from(this.ProductCompanyRepository
      .createQueryBuilder("product_company")
      .leftJoinAndSelect("product_company.company", "company")
      .leftJoinAndSelect("product_company.products", "products")
      .where('product_company.id = id', {id })
      .getMany());
  }
  deleteOne(id: number): Observable<any> {
    return from(this.ProductCompanyRepository.delete(id));
  }

  
  findNewArr(data: any[]): Observable<any[]> {
    for (let i =0 ; i < data.length ; i++){
      for(const item of data){     
        return from(this.ProductCompanyRepository
        .createQueryBuilder("product_company")
        .leftJoinAndSelect("product_company.company", "company")
        .leftJoinAndSelect("product_company.products", "products")
        .where('product_company.id := id', {id:item.id})
        .getMany());} 
    }
    
  }


  updateOne(id: number, productcompany: ProductCompany): Observable<any> {
    return from(this.ProductCompanyRepository.update(id, productcompany));
  }

  async updateProductNew(newdata: any) {
    console.log("newdata", newdata)
    const productSave =
      await this.productService.createProduct(newdata.product)


    for (let i = 0; i < newdata.productcom;) {
      for (const item of newdata.productcom) {
        //return  from(this.updateOne(item.id,productSav))
      }
    }
  }

  
  createProdcutCompany(productcompany: CreateProductCompanyDto): Observable<any> {
    let newproductcompanys: ProductCompany;
    const { products, company } =
      productcompany;

    const ProductExist =
      this.productService.findOne(products);
    const CompanyExist =
      this.companyService.findOne(company);

    return forkJoin({
      ProductValue: ProductExist,
      CompanyValue: CompanyExist,

    }).pipe(
      map(({ ProductValue, CompanyValue }) => {
        if (ProductValue && CompanyValue) {
          newproductcompanys = new ProductCompany();
          newproductcompanys.company = CompanyValue;
          newproductcompanys.products = ProductValue;
          newproductcompanys.note = productcompany?.note;
          newproductcompanys.code = productcompany?.code;
          newproductcompanys.product_company_name = productcompany?.product_company_name;
          newproductcompanys.status = productcompany?.status;


          this.ProductCompanyRepository.save(newproductcompanys).then((res) => {
            console.log(res);
            if (!res) {
              throw new HttpException(
                'can not save productcompany',
                HttpStatus.BAD_REQUEST,
              );
            }
          });
          return newproductcompanys;
        } else {
          throw new HttpException(
            'productcompany  not found',
            HttpStatus.NOT_FOUND,
          );
        }
      }),
    );
  }
  createProdcutCompanyByProduct(product: Product, ProductDto: any): Observable<any> {
    let newproductcompanys: ProductCompany;
   
     

    const CompanyExist =
      this.companyService.findOne(ProductDto.company);

    return forkJoin({
      CompanyValue: CompanyExist,

    }).pipe(
      map(({ CompanyValue }) => {
        if ( CompanyValue) {
          newproductcompanys = new ProductCompany();
          newproductcompanys.company = CompanyValue;
          newproductcompanys.products = product;
          // newproductcompanys.note = productcompany?.note;
          // newproductcompanys.code = productcompany?.code;
          newproductcompanys.product_company_name = ProductDto?.product_company_name;
          // newproductcompanys.status = productcompany?.status;


          this.ProductCompanyRepository.save(newproductcompanys).then((res) => {
            console.log(res);
            if (!res) {
              throw new HttpException(
                'can not save productcompany',
                HttpStatus.BAD_REQUEST,
              );
            }
          });
          return newproductcompanys;
        } else {
          throw new HttpException(
            'productcompany  not found',
            HttpStatus.NOT_FOUND,
          );
        }
      }),
    );
  }
}
