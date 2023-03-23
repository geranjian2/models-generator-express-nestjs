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
    import { BillingEntity } from '';




@Table({ modelName: 'invoices_payment' })
export class InvoicePaymentEntity extends Model<InvoicePaymentEntity> {
          @ForeignKey(() => BillingEntity)
          @Column
          billingId: number;

          paymentAt: Date;
          
          @CreatedAt
          @Column
          createdAt: Date;
          
          @UpdatedAt
          @Column
          updatedAt: Date;
          
          @DeletedAt
          @Column
          deletedAt: Date;
          
         @BelongsTo(() => BillingEntity)
         billing: BillingEntity;
         
}