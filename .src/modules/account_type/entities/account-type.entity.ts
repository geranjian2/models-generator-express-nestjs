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



@Table({ modelName: 'account_type' })
export class AccountTypeEntity extends Model<AccountTypeEntity> {
         @Column({
            type: DataType.INTEGER,
            allowNull: true,
         })
          code: number;
          
         @Column({
            type: DataType.STRING(50),
            allowNull: true,
         })
          name: string;
          
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