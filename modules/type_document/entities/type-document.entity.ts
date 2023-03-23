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
   import { CompanyEntity } from '';
   import { ThirdEntity } from '';



@Table({ modelName: 'type_document' })
export class TypeDocumentEntity extends Model<TypeDocumentEntity> {
         @Column({
            type: DataType.INTEGER,
            allowNull: false,
         })
          code: number;
          
         @Column({
            type: DataType.STRING(100),
            allowNull: false,
         })
          name: string;
          
         @Column({
            type: DataType.STRING(100),
            allowNull: false,
         })
          description: string;
          
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

         @HasMany(() => CompanyEntity)
         company?: CompanyEntity[];

         @HasMany(() => ThirdEntity)
         third?: ThirdEntity[];

}