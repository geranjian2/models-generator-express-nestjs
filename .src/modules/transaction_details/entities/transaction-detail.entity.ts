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
    import { TransactionEntity } from '';
    import { VoucherEntity } from '';




@Table({ modelName: 'transaction_details' })
export class TransactionDetailEntity extends Model<TransactionDetailEntity> {
         @Column({
            type: DataType.STRING(20),
            allowNull: true,
         })
          uuid: string;
          
          @ForeignKey(() => TransactionEntity)
          @Column
          transactionId: number;

          @ForeignKey(() => VoucherEntity)
          @Column
          voucherId: number;

         @Column({
            type: DataType.TEXT,
            allowNull: true,
         })
          document: string;
          
         @Column({
            type: DataType.STRING(40),
            allowNull: true,
         })
          invoiceNumber: string;
          
          invoiceExpiration: Date;
          
          value: string;
          
          status: string;
          
          @CreatedAt
          @Column
          createdAt: Date;
          
          @UpdatedAt
          @Column
          updatedAt: Date;
          
          @DeletedAt
          @Column
          deletedAt: Date;
          
         @BelongsTo(() => TransactionEntity)
         transaction: TransactionEntity;
         
         @BelongsTo(() => VoucherEntity)
         voucher: VoucherEntity;
         
}