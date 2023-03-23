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
    import { ThirdEntity } from '';

   import { TransactionEntity } from '';



@Table({ modelName: 'third_banks' })
export class ThirdBankEntity extends Model<ThirdBankEntity> {
          @ForeignKey(() => ThirdEntity)
          @Column
          thirdId: number;

          @ForeignKey(() => BankEntity)
          @Column
          bankId: number;

         @Column({
            type: DataType.STRING(16),
            allowNull: false,
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
         
         @BelongsTo(() => ThirdEntity)
         third: ThirdEntity;
         
         @HasMany(() => TransactionEntity)
         transaction?: TransactionEntity[];

}