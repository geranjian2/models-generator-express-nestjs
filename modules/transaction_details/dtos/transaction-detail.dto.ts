
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { TransactionEntity } from ''
  import { VoucherEntity } from ''
  import { TransactionDetailModel } from ''
  export class TransactionDetailDto {
    constructor(
      register: TransactionDetailModel
    ){
        this.id=register.id
        this.uuid=register.uuid
        this.transactionId=register.transactionId
        this.voucherId=register.voucherId
        this.document=register.document
        this.invoiceNumber=register.invoiceNumber
        this.invoiceExpiration=register.invoiceExpiration
        this.value=register.value
        this.status=register.status
        this.createdAt=register.createdAt
        this.updatedAt=register.updatedAt
        this.deletedAt=register.deletedAt
         this.transaction= register.TransactionEntity
         this.voucher= register.VoucherEntity
    }
      @ApiPropertyOptional()
      id?: number;
      @ApiProperty()
      uuid?: string;
      @ApiProperty()
      transactionId?: number;
      @ApiProperty()
      voucherId?: number;
      @ApiProperty()
      document?: string;
      @ApiProperty()
      invoiceNumber?: string;
      @ApiProperty()
      invoiceExpiration?: Date;
      @ApiProperty()
      value?: string;
      @ApiProperty()
      status?: string;
      @ApiProperty()
      createdAt?: Date;
      @ApiProperty()
      updatedAt?: Date;
      @ApiProperty()
      deletedAt?: Date;
      @ApiProperty()
      transaction: TransactionEntity;
      @ApiProperty()
      voucher: VoucherEntity;
};



