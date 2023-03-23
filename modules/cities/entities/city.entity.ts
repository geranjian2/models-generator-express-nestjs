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
    import { DepartmentEntity } from '';

   import { CompanyEntity } from '';



@Table({ modelName: 'cities' })
export class CityEntity extends Model<CityEntity> {
         @Column({
            type: DataType.STRING(50),
            allowNull: false,
         })
          code: string;
          
         @Column({
            type: DataType.STRING(100),
            allowNull: false,
         })
          name: string;
          
          @ForeignKey(() => DepartmentEntity)
          @Column
          departmentId: number;

          @CreatedAt
          @Column
          createdAt: Date;
          
          @UpdatedAt
          @Column
          updatedAt: Date;
          
          @DeletedAt
          @Column
          deletedAt: Date;
          
         @BelongsTo(() => DepartmentEntity)
         department: DepartmentEntity;
         
         @HasMany(() => CompanyEntity)
         company?: CompanyEntity[];

}