import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
  HasMany,
} from 'sequelize-typescript';

   import { CompanyEntity } from '';
   import { DepartmentEntity } from '';



@Table({ modelName: 'countries' })
export class CountryEntity extends Model<CountryEntity> {
         @Column({
            type: DataType.STRING(10),
            allowNull: true,
         })
          indicative: string;
          
         @Column({
            type: DataType.STRING(100),
            allowNull: true,
         })
          name: string;
          
          @CreatedAt
          @Column
          createdAt: Date;
          
          @UpdatedAt
          @Column
          updatedAt: Date;
          
          @DeletedAt
          @Column
          deletedAt: Date;
          
         @HasMany(() => CompanyEntity)
         company?: CompanyEntity[];

         @HasMany(() => DepartmentEntity)
         department?: DepartmentEntity[];

}