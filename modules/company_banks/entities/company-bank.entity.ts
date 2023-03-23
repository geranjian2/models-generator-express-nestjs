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
    import { AccountTypeEntity } from '';
    import { BankEntity } from '';
    import { CompanyEntity } from '';

   import { TransactionEntity } from '';



@Table({ modelName: 'company_banks' })
export class CompanyBankEntity extends Model<CompanyBankEntity> {
          @ForeignKey(() => CompanyEntity)
          @Column
          companyId: number;

          @ForeignKey(() => BankEntity)
          @Column
          bankId: number;

         @Column({
            type: DataType.STRING(16),
            allowNull: true,
         })
          bankAccount: string;
          
          @ForeignKey(() => AccountTypeEntity)
          @Column
          accountTypeId: number;

          @CreatedAt
          @Column
          createdAt: Date;
          
          @UpdatedAt
          @Column
          updatedAt: Date;
          
          @DeletedAt
          @Column
          deletedAt: Date;
          
         @BelongsTo(() => AccountTypeEntity)
         accountType: AccountTypeEntity;
         
         @BelongsTo(() => BankEntity)
         bank: BankEntity;
         
         @BelongsTo(() => CompanyEntity)
         company: CompanyEntity;
         
         @HasMany(() => TransactionEntity)
         transaction?: TransactionEntity[];

}