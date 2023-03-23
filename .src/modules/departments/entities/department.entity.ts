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
    import { CountryEntity } from '';

   import { CityEntity } from '';
   import { CompanyEntity } from '';



@Table({ modelName: 'departments' })
export class DepartmentEntity extends Model<DepartmentEntity> {
         @Column({
            type: DataType.STRING(50),
            allowNull: true,
         })
          code: string;
          
         @Column({
            type: DataType.STRING(100),
            allowNull: true,
         })
          name: string;
          
          @ForeignKey(() => CountryEntity)
          @Column
          countryId: number;

          @CreatedAt
          @Column
          createdAt: Date;
          
          @UpdatedAt
          @Column
          updatedAt: Date;
          
          @DeletedAt
          @Column
          deletedAt: Date;
          
         @BelongsTo(() => CountryEntity)
         country: CountryEntity;
         
         @HasMany(() => CityEntity)
         city?: CityEntity[];

         @HasMany(() => CompanyEntity)
         company?: CompanyEntity[];

}