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
import { Product } from './entities/product.entity';
import { AuthService } from '../../auth/services/auth.service';
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
import { resolve } from 'path/posix';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UnitService } from '@app/unit/unit.service';
import { ProductGradeService } from '@app/product-grade/product-grade.service';
import { SubCategoryThService } from '@app/sub-category-th/sub-category-th.service';
import { SubCategorySecService } from '@app/sub-category-sec/sub-category-sec.service';
import { SubCategoryFrService } from '@app/sub-category-fr/sub-category-fr.service';
import { ProductStorageService } from '@app/product-storage/product-storage.service';
import { CodeService } from '@app/code/code.service';
import { CarBrandService } from '@app/car-brand/car-brand.service';
import { ProductCompanyService } from '@app/product-company/product-company.service';
// import { ProductCompanyService } from '@app/product-company/product-company.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @Inject(UnitService)
    private readonly unitService: UnitService,

    @Inject(ProductGradeService)
    private readonly gradeService: ProductGradeService,

    @Inject(SubCategoryFrService)
    private readonly subcategoryfrService: SubCategoryFrService,

    @Inject(SubCategorySecService)
    private readonly subcategorysecService: SubCategorySecService,

    @Inject(SubCategoryThService)
    private readonly subcategorythService: SubCategoryThService,

    @Inject(ProductStorageService)
    private readonly productstorageService: ProductStorageService,

    @Inject(CodeService)
    private readonly codeService: CodeService,

    @Inject(CarBrandService)
    private readonly carbrandService: CarBrandService,

    @Inject(forwardRef(() => ProductCompanyService))
    private readonly productCompanyService: ProductCompanyService,



  ) { }

  async all() {
    return this.productRepository.find();
  }

  // create(product: CreateProductDto): Observable<Product> {
  //   return from(this.productRepository.save(product));
  // }

  findOne(id: number): Observable<Product> {
    return from(this.productRepository.findOne({ id }));
  }

  findAll(): Observable<Product[]> {
    return from(this.productRepository.createQueryBuilder("product")
      .leftJoinAndSelect("product.code", "code")
      .leftJoinAndSelect("product.product_grade", "product_grade")
      .leftJoinAndSelect("product.product_storage", "product_storage")
      .leftJoinAndSelect("product.unit", "unit")
      .leftJoinAndSelect("product.car_brand", "car_brand")
      .leftJoinAndSelect("product.category_fr", "category_fr")
      .leftJoinAndSelect("product.category_sec", "category_sec")
      .leftJoinAndSelect("product.category_th", "category_th")
      .getMany());
  }

  deleteOne(id: number): Observable<any> {
    return from(this.productRepository.delete(id));
  }

  updateOne(id: number, product: Product): Observable<any> {
    return from(this.productRepository.update(id, product));
  }

// findCom(data:any): Observable<any> {
//   for(let i = 0 ; i < data.length ; i++){
//     for (const item of data ){
//      return this.productCompanyService.findOne(item);
//     }
    
//   }
// }
  createProduct(product: any): Observable<any> {
    let newproducts: Product;
    const {  unit, product_grade, category_fr,
      category_sec, category_th,  car_brand} =
      product;
    console.log("data",product.product_storage)

    const codesave = this.codeService.createCode(product)
    // console.log("storage",product.product_storage)
    const ProductStorageSave = 
    this.productstorageService.createProductStorage(product.product_storage)

    // const CodeExist =
    //   this.codeService.findOne(codesave);
    const UnitExist =
      this.unitService.findOne(unit);
    const GradeExist =
      this.gradeService.findOne(product_grade);
    const CategoryFrExist =
      this.subcategoryfrService.findOne(category_fr);
    const CategorySecExist =
      this.subcategorysecService.findOne(category_sec);
    const CategoryThExist =
      this.subcategorythService.findOne(category_th);
    // const ProductCompanyExist = 
    //   this.findCom(product_company);
       

    // const ProductStorageExist =
    //   this.productstorageService.findOne(product_storage);
    const CarBrandExist =
      this.carbrandService.findOne(car_brand);

    return forkJoin({
      CodeValue: codesave,
      UnitValue: UnitExist,
      CarBrandValue: CarBrandExist,
      ProductGradeValue: GradeExist,
      CategoryFrValue: CategoryFrExist,
      CategorySecValue: CategorySecExist,
      CategoryThValue: CategoryThExist,
      ProductStorageValue: ProductStorageSave,
      // ProductCompanyValue: ProductCompanyExist

// ProductCompanyValue,
// ProductCompanyValue &&
    }).pipe(
      map(({ CodeValue, UnitValue, ProductGradeValue, CategoryFrValue, 
        CategorySecValue, CategoryThValue, ProductStorageValue, CarBrandValue}) => {

        if (  CodeValue && UnitValue && ProductGradeValue && CategoryFrValue && 
          CategorySecValue && CategoryThValue && ProductStorageValue && CarBrandValue ) {

          newproducts = new Product();
          newproducts.code = CodeValue;
          newproducts.unit = UnitValue;
          newproducts.car_brand = CarBrandValue;
          newproducts.product_grade = ProductGradeValue;
          // newproducts.product_company = ProductCompanyValue;
          newproducts.category_fr = CategoryFrValue;
          newproducts.category_sec = CategorySecValue;
          newproducts.category_th = CategoryThValue;
          newproducts.product_storage = ProductStorageValue;
          newproducts.limit_amount = product?.limit_amount;
          newproducts.amount = product?.amount;
          newproducts.name = product?.name;
          newproducts.price_sell = product?.price_sell;
          newproducts.price = product?.price;
          newproducts.status = product?.status;


          this.productRepository.save(newproducts).then((res) => {
            console.log(res);
            if (!res) {
              throw new HttpException(
                'can not save product',
                HttpStatus.BAD_REQUEST,
              );
            }
          });
          return newproducts;
        } else {
          throw new HttpException(
            'product  not found',
            HttpStatus.NOT_FOUND,
          );
        }
      }),
      map((result)=>{
        return this.productCompanyService.createProdcutCompanyByProduct(result, product )
      })
    );
  }

//   createProductNew(product: any){
//     let newproducts: Product;
//     const {  unit, product_grade, category_fr,
//       category_sec, category_th,  car_brand, product_company} =
//       product;
//     console.log("data",product.product_storage)

//     const codesave = this.codeService.createCode(product)
//     // console.log("storage",product.product_storage)
//     const ProductStorageSave = 
//     this.productstorageService.createProductStorage(product.product_storage)

//     // const CodeExist =
//     //   this.codeService.findOne(codesave);
//     const UnitExist =
//       this.unitService.findOne(unit);
//     const GradeExist =
//       this.gradeService.findOne(product_grade);
//     const CategoryFrExist =
//       this.subcategoryfrService.findOne(category_fr);
//     const CategorySecExist =
//       this.subcategorysecService.findOne(category_sec);
//     const CategoryThExist =
//       this.subcategorythService.findOne(category_th);
//     // const ProductCompanyExist = 
//     //   this.productCompanyService.findOne(product_company);
       

//     // const ProductStorageExist =
//     //   this.productstorageService.findOne(product_storage);
//     const CarBrandExist =
//       this.carbrandService.findOne(car_brand);

//     return forkJoin({
//       CodeValue: codesave,
//       UnitValue: UnitExist,
//       CarBrandValue: CarBrandExist,
//       ProductGradeValue: GradeExist,
//       CategoryFrValue: CategoryFrExist,
//       CategorySecValue: CategorySecExist,
//       CategoryThValue: CategoryThExist,
//       ProductStorageValue: ProductStorageSave,
//       // ProductCompanyValue: ProductCompanyExist

// // ProductCompanyValue,
// //   ProductCompanyValue &&
//     }).pipe(
//       switchMap(async({ CodeValue, UnitValue, ProductGradeValue, CategoryFrValue, 
//         CategorySecValue, CategoryThValue, ProductStorageValue, CarBrandValue}) => {

//         if ( CodeValue && UnitValue && ProductGradeValue && CategoryFrValue && 
//           CategorySecValue && CategoryThValue && ProductStorageValue && CarBrandValue ) {

//           newproducts = new Product();
//           newproducts.code = CodeValue;
//           newproducts.unit = UnitValue;
//           newproducts.car_brand = CarBrandValue;
//           newproducts.product_grade = ProductGradeValue;
//           // newproducts.product_company = ProductCompanyValue;
//           newproducts.category_fr = CategoryFrValue;
//           newproducts.category_sec = CategorySecValue;
//           newproducts.category_th = CategoryThValue;
//           newproducts.product_storage = ProductStorageValue;
//           newproducts.limit_amount = product?.limit_amount;
//           newproducts.amount = product?.amount;
//           newproducts.name = product?.name;
//           newproducts.price_sell = product?.price_sell;
//           newproducts.price = product?.price;
//           newproducts.status = product?.status;


//           this.productRepository.save(newproducts).then((res) => {
//             console.log(res);
//             if (!res) {
//               throw new HttpException(
//                 'can not save product',
//                 HttpStatus.BAD_REQUEST,
//               );
//             }
//           });
//           return newproducts;
//         } else {
//           throw new HttpException(
//             'product  not found',
//             HttpStatus.NOT_FOUND,
//           );
//         }
//       }),
//     );
//   }

  /* findAll(): Promise<Privilege[]> {
    return this.privilegeRepository.find();
  } */

  /* public async findAll(): Promise<Privilege[]> {
    return await this.privilegeRepository.findAll();
}

public async findOne(privilegeId: number): Promise<Privilege> {
    const privilege= await this.privilegeRepository.findById(privilegeId);
    if (!privilege) {
        throw new NotFoundException(`Privilege #${privilegeId} not found`);
    }
    return privilege;
}

public async create(
    createPrivilegeDto: CreatePrivilegeDto,
): Promise<Privilege> {
    try {
      return await this.privilegeRepository.createPrivilege(createPrivilegeDto);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
}

public async update(
    privilegeId: number,
    updatePrivilegeDto: UpdatePrivilegeDto,
): Promise<Privilege> {
    const product = await this.privilegeRepository.findOne( privilegeId);
    if (!product) {
        throw new NotFoundException(`Product #${ privilegeId} not found`);
    }
    return this.privilegeRepository.editPrivilege( privilegeId, updatePrivilegeDto);
}

public async remove(privilegeId: number): Promise<void> {
    await this.privilegeRepository.delete(privilegeId);
}
*/
}
