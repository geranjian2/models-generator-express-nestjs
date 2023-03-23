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
            allowNull: true,
         })
          name: string;
          
         @Column({
            type: DataType.TEXT,
            allowNull: true,
         })
          description: string;
          
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
          
         @HasMany(() => TransactionDetailEntity)
         transactionDetail?: TransactionDetailEntity[];

}