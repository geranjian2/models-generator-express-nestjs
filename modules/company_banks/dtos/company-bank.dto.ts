
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { AccountTypeEntity } from ''
  import { BankEntity } from ''
  import { CompanyEntity } from ''
  import { CompanyBankModel } from ''
  export class CompanyBankDto {
    constructor(
      register: CompanyBankModel
    ){
        this.id=register.id
        this.companyId=register.companyId
        this.bankId=register.bankId
        this.bankAccount=register.bankAccount
        this.accountTypeId=register.accountTypeId
        this.createdAt=register.createdAt
        this.updatedAt=register.updatedAt
        this.deletedAt=register.deletedAt
         this.accountType= register.AccountTypeEntity
         this.bank= register.BankEntity
         this.company= register.CompanyEntity
    }
      @ApiPropertyOptional()
      id?: number;
      @ApiProperty()
      companyId?: number;
      @ApiProperty()
      bankId?: number;
      @ApiProperty()
      bankAccount?: string;
      @ApiProperty()
      accountTypeId?: number;
      @ApiProperty()
      createdAt?: Date;
      @ApiProperty()
      updatedAt?: Date;
      @ApiProperty()
      deletedAt?: Date;
      @ApiProperty()
      accountType: AccountTypeEntity;
      @ApiProperty()
      bank: BankEntity;
      @ApiProperty()
      company: CompanyEntity;
};



