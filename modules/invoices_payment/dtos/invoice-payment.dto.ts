
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { BillingEntity } from ''
  import { InvoicePaymentModel } from ''
  export class InvoicePaymentDto {
    constructor(
      register: InvoicePaymentModel
    ){
        this.id=register.id
        this.billingId=register.billingId
        this.paymentAt=register.paymentAt
        this.createdAt=register.createdAt
        this.updatedAt=register.updatedAt
        this.deletedAt=register.deletedAt
         this.billing= register.BillingEntity
    }
      @ApiPropertyOptional()
      id?: number;
      @ApiProperty()
      billingId?: number;
      @ApiProperty()
      paymentAt?: Date;
      @ApiProperty()
      createdAt?: Date;
      @ApiProperty()
      updatedAt?: Date;
      @ApiProperty()
      deletedAt?: Date;
      @ApiProperty()
      billing: BillingEntity;
};



