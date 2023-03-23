
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { CompanyEntity } from ''
  import { BillingModel } from ''
  export class BillingDto {
    constructor(
      register: BillingModel
    ){
        this.id=register.id
        this.numberBilling=register.numberBilling
        this.companyId=register.companyId
        this.valuePlan=register.valuePlan
        this.status=register.status
        this.dateBilling=register.dateBilling
        this.createdAt=register.createdAt
        this.updatedAt=register.updatedAt
        this.deletedAt=register.deletedAt
         this.company= register.CompanyEntity
    }
      @ApiPropertyOptional()
      id?: number;
      @ApiProperty()
      numberBilling?: string;
      @ApiProperty()
      companyId?: number;
      @ApiProperty()
      valuePlan?: string;
      @ApiProperty()
      status?: string;
      @ApiProperty()
      dateBilling?: Date;
      @ApiProperty()
      createdAt?: Date;
      @ApiProperty()
      updatedAt?: Date;
      @ApiProperty()
      deletedAt?: Date;
      @ApiProperty()
      company: CompanyEntity;
};



