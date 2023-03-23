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

   import { TransactionDetailEntity } from '';



@Table({ modelName: 'voucher' })
export class VoucherEntity extends Model<VoucherEntity> {
         @Column({
            type: DataType.STRING(100),
            allowNull: false,
         })
          name: string;
          
         @Column({
            type: DataType.TEXT,
            allowNull: false,
         })
          description: string;
          
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
          
         @HasMany(() => TransactionDetailEntity)
         transactionDetail?: TransactionDetailEntity[];

}