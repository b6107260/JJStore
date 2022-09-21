import { Column, Entity, PrimaryGeneratedColumn, ManyToOne,JoinColumn,OneToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '@common/BaseEntity';
import { Product } from '@app/products/entities/product.entity';

@Entity('sub_category_sec')
export class SubCategorySec extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    note: string;

    @Column({ type: 'char', length: 1, comment: 'Y = yes, N = no, D = delete',nullable: true})
    status: string;

    //----------------------------------

    //----------- ตาราง *** Product *** ----------- 
    @OneToMany(() => Product, (product) => product.category_sec)
    products: Product[];
 }
