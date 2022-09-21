import { Column, Entity, PrimaryGeneratedColumn, ManyToOne,JoinColumn,OneToOne,OneToMany } from 'typeorm';
import { BaseEntity } from '@common/BaseEntity'
import { CarModel } from '@app/car-model/entities/car-model.entity';
import { Product } from '@app/products/entities/product.entity';

@Entity('car_brand')
export class CarBrand extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column({ type: 'char', length: 1, comment: 'Y = yes, N = no, D = delete'})
  status: string;

//----------- ตาราง *** Product *** ----------- 
  @OneToMany(() => Product, (product) => product.car_brand)
  product: Product[];

//----------- ตาราง *** Car_model *** ----------- 
  @OneToMany(() => CarModel, (car_model) => car_model.car_brand)
  car_model: CarModel[];
  
}
