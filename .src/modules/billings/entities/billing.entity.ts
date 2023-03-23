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

   import { InvoicePaymentEntity } from '';



@Table({ modelName: 'billings' })
export class BillingEntity extends Model<BillingEntity> {
         @Column({
            type: DataType.STRING(100),
            allowNull: false,
         })
          numberBilling: string;
          
          @ForeignKey(() => CompanyEntity)
          @Column
          companyId: number;

          valuePlan: string;
          
          status: string;
          
          dateBilling: Date;
          
          @CreatedAt
          @Column
          createdAt: Date;
          
          @UpdatedAt
          @Column
          updatedAt: Date;
          
          @DeletedAt
          @Column
          deletedAt: Date;
          
         @BelongsTo(() => CompanyEntity)
         company: CompanyEntity;
         
         @HasMany(() => InvoicePaymentEntity)
         invoicePayment?: InvoicePaymentEntity[];

}