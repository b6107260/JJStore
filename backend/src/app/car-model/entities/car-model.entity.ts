import { Column, Entity, PrimaryGeneratedColumn, ManyToOne,JoinColumn,OneToOne,OneToMany } from 'typeorm';
import { BaseEntity } from '@common/BaseEntity'
import { CarBrand } from '@app/car-brand/entities/car-brand.entity';

@Entity('car_model')
export class CarModel extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    description: string;
  
    @Column()
    code: string;

    @Column({nullable : true})
    note: string;
  
    @Column({ type: 'char', length: 1, comment: 'Y = yes, N = no, D = delete'})
    status: string;
  
  //----------- ตาราง *** Car_brand *** ----------- 
  @ManyToOne(() => CarBrand, (car_brand) => car_brand.car_model)
  car_brand: CarBrand;
  }
  
