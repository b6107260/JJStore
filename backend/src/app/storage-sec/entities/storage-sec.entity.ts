import { Column, Entity, PrimaryGeneratedColumn, ManyToOne,JoinColumn,OneToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '@common/BaseEntity';
import { ProductStorage } from '@app/product-storage/entities/product-storage.entity';


@Entity('storage_sec')
export class StorageSec {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    note: string;

    @Column({ type: 'char', length: 1, comment: 'Y = yes, N = no, D = delete',nullable: true})
    status: string;

    
    //----------------------------------

    @OneToMany(() => ProductStorage, (product_storage) => product_storage.storage_sec)
    product_storage: ProductStorage[];
}
