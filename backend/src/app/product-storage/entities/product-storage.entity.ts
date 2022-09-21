import { Column, Entity, PrimaryGeneratedColumn, ManyToOne,JoinColumn,OneToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '@common/BaseEntity';
import { StorageTh } from '@app/storage-th/entities/storage-th.entity';
import { StorageFr } from '@app/storage-fr/entities/storage-fr.entity';
import { StorageSec } from '@app/storage-sec/entities/storage-sec.entity';
import { Product } from '@app/products/entities/product.entity';

@Entity('product_storage')
export class ProductStorage extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    note: string;

    @Column({ type: 'char', length: 1, comment: 'Y = yes, N = no, D = delete',nullable: true})
    status: string;

    //----------- ตาราง *** Product *** ----------- 
    @OneToOne(() => Product, (product) => product.product_storage)
    products: Product;
    //----------- ตาราง *** Storage_Th *** ----------- 
    @ManyToOne(() => StorageTh, (storage_th) => storage_th.product_storage)
    storage_th: StorageTh;

    //----------- ตาราง *** Storage_Fr *** ----------- 
    @ManyToOne(() => StorageFr, (storage_fr) => storage_fr.product_storage)
    storage_fr: StorageFr;

    //----------- ตาราง *** Storage_Sec *** ----------- 
    @ManyToOne(() => StorageSec, (storage_sec) => storage_sec.product_storage)
    storage_sec: StorageSec;

    
}
