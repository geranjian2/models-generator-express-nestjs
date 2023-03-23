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

   import { ThirdEntity } from '';



@Table({ modelName: 'third_category' })
export class ThirdCategoryEntity extends Model<ThirdCategoryEntity> {
         @Column({
            type: DataType.STRING(100),
            allowNull: false,
         })
          name: string;
          
         @Column({
            type: DataType.BOOLEAN,
            allowNull: false,
         })
          status: boolean;
          
          @CreatedAt
          @Column
          createdAt: Date;
          
          @UpdatedAt
          @Column
          updatedAt: Date;
          
          @DeletedAt
          @Column
          deletedAt: Date;
          
         @HasMany(() => ThirdEntity)
         third?: ThirdEntity[];

}