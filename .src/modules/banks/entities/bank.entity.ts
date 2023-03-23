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

   import { CompanyBankEntity } from '';
   import { ThirdBankEntity } from '';



@Table({ modelName: 'banks' })
export class BankEntity extends Model<BankEntity> {
         @Column({
            type: DataType.STRING(100),
            allowNull: true,
         })
          name: string;
          
         @Column({
            type: DataType.TEXT,
            allowNull: true,
         })
          description: string;
          
         @Column({
            type: DataType.STRING(10),
            allowNull: true,
         })
          code: string;
          
         @Column({
            type: DataType.BOOLEAN,
            allowNull: true,
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
          
         @HasMany(() => CompanyBankEntity)
         companyBank?: CompanyBankEntity[];

         @HasMany(() => ThirdBankEntity)
         thirdBank?: ThirdBankEntity[];

}