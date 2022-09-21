
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne,JoinColumn,OneToOne } from 'typeorm';
import { BaseEntity } from '@common/BaseEntity'
import { Product } from '@app/products/entities/product.entity';
import { Company } from '@app/company/entities/company.entity';

@Entity('product_company')
export class ProductCompany extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product_company_name: string;

  @Column()
  code: string;

  @Column({nullable: true})
  note: string;

  @Column({ type: 'char', length: 1, comment: 'Y = yes, N = no, D = delete',nullable: true})
  status: string;

  //----------- ตาราง  Product  ----------- 
  @ManyToOne(() => Product, (products) => products.product_company)
  products: Product;

  //----------- ตาราง Company  ----------- 
  @ManyToOne(() => Company, (company) => company.product_company)
  company: Company;

}
