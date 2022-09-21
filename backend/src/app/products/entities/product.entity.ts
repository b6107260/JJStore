import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '@common/BaseEntity'
import { Product_grade } from '@app/product-grade/entities/product-grade.entity';
import { ProductCompany } from '@app/product-company/entities/product-company.entity';
import { Code } from '@app/code/entities/code.entity';
import { Unit } from '@app/unit/entities/unit.entity';
import { SubCategoryFr } from '@app/sub-category-fr/entities/sub-category-fr.entity';
import { SubCategorySec } from '@app/sub-category-sec/entities/sub-category-sec.entity';
import { SubCategoryTh } from '@app/sub-category-th/entities/sub-category-th.entity';
import { ProductStorage } from '@app/product-storage/entities/product-storage.entity';
import { CarBrand } from '@app/car-brand/entities/car-brand.entity';

@Entity('product')
export class Product extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  price_sell: number;

  @Column({ nullable: true })
  price: number;

  @Column({ nullable: true })
  limit_amount: number;
  //จำเป็นต้องซื้อในจำนวนเท่านี้ ๆ สินค้าเหลือเท่าไหร่ถึงจำเป็นต้องสั่ง ex ถ้าเมื่อไหร่เหลือในเกณฑ์ที่กำหนด (เป็นตัวแดง) แล้วให้สั่ง 
  //เขียน alert 
  @Column({ nullable: true })
  amount: number;

  @Column({ type: 'char', length: 1, comment: 'Y = yes, N = no, D = delete', nullable: true })
  status: string;

  //--------------------------------------------------

  //------ Join ตาราง Product_storage* 1 ต่อ 1 
  @OneToOne(() => ProductStorage, product_storage => product_storage.products)
  @JoinColumn()
  product_storage: ProductStorage;

  //------ Join ตาราง Code* 1 ต่อ 1 
  @OneToOne(() => Code, code => code.product)
  @JoinColumn()
  code: Code;

  //----------- ตาราง  Product Company  ----------- 
  @OneToMany(() => ProductCompany, (product_company) => product_company.products)
  product_company: ProductCompany[];

  //----------- ตาราง  Product Grade  ----------- 
  @ManyToOne(() => Product_grade, (product_grade) => product_grade.products)
  product_grade: Product_grade;

  //----------- ตาราง  Unit  ----------- 
  @ManyToOne(() => Unit, (unit) => unit.products)
  unit: Unit;

  //----------- ตาราง  car ----------- 
  @ManyToOne(() => CarBrand, (car_brand) => car_brand.product)
  car_brand: CarBrand;

  //----------- ตาราง *** Category_Fr *** ----------- 
  @ManyToOne(() => SubCategoryFr, (category_fr) => category_fr.products)
  category_fr: SubCategoryFr;

  //----------- ตาราง *** Category_Fr *** ----------- 
  @ManyToOne(() => SubCategorySec, (category_sec) => category_sec.products)
  category_sec: SubCategorySec;

  //----------- ตาราง *** Category_Fr *** ----------- 
  @ManyToOne(() => SubCategoryTh, (category_th) => category_th.products)
  category_th: SubCategoryTh;

}