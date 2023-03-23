
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { AccountTypeEntity } from ''
  import { BankEntity } from ''
  import { ThirdEntity } from ''
  import { ThirdBankModel } from ''
  export class ThirdBankDto {
    constructor(
      register: ThirdBankModel
    ){
        this.id=register.id
        this.thirdId=register.thirdId
        this.bankId=register.bankId
        this.bankAccount=register.bankAccount
        this.accountTypeId=register.accountTypeId
        this.createdAt=register.createdAt
        this.updatedAt=register.updatedAt
        this.deletedAt=register.deletedAt
         this.accountType= register.AccountTypeEntity
         this.bank= register.BankEntity
         this.third= register.ThirdEntity
    }
      @ApiPropertyOptional()
      id?: number;
      @ApiProperty()
      thirdId?: number;
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
      third: ThirdEntity;
};



