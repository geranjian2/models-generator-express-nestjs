
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { CompanyBankEntity } from ''
  import { CompanyEntity } from ''
  import { CompanyTeamEntity } from ''
  import { ThirdBankEntity } from ''
  import { ThirdEntity } from ''
  import { TransactionModel } from ''
  export class TransactionDto {
    constructor(
      register: TransactionModel
    ){
        this.id=register.id
        this.uuid=register.uuid
        this.reference=register.reference
        this.companyId=register.companyId
        this.companyBankId=register.companyBankId
        this.thirdId=register.thirdId
        this.thirdBankId=register.thirdBankId
        this.companyTeamId=register.companyTeamId
        this.quantity=register.quantity
        this.averageValue=register.averageValue
        this.value=register.value
        this.expirationDate=register.expirationDate
        this.observations=register.observations
        this.statusProcess=register.statusProcess
        this.status=register.status
        this.createdAt=register.createdAt
        this.payedAt=register.payedAt
        this.updatedAt=register.updatedAt
        this.deletedAt=register.deletedAt
        this.groupPayingId=register.groupPayingId
         this.companyBank= register.CompanyBankEntity
         this.company= register.CompanyEntity
         this.companyTeam= register.CompanyTeamEntity
         this.thirdBank= register.ThirdBankEntity
         this.third= register.ThirdEntity
    }
      @ApiPropertyOptional()
      id?: number;
      @ApiProperty()
      uuid?: string;
      @ApiProperty()
      reference?: string;
      @ApiProperty()
      companyId?: number;
      @ApiProperty()
      companyBankId?: number;
      @ApiProperty()
      thirdId?: number;
      @ApiProperty()
      thirdBankId?: number;
      @ApiProperty()
      companyTeamId?: number;
      @ApiProperty()
      quantity?: number;
      @ApiProperty()
      averageValue?: string;
      @ApiProperty()
      value?: string;
      @ApiProperty()
      expirationDate?: Date;
      @ApiProperty()
      observations?: string;
      @ApiProperty()
      statusProcess?: string;
      @ApiProperty()
      status?: string;
      @ApiProperty()
      createdAt?: Date;
      @ApiProperty()
      payedAt?: Date;
      @ApiProperty()
      updatedAt?: Date;
      @ApiProperty()
      deletedAt?: Date;
      @ApiProperty()
      groupPayingId?: any;
      @ApiProperty()
      companyBank: CompanyBankEntity;
      @ApiProperty()
      company: CompanyEntity;
      @ApiProperty()
      companyTeam: CompanyTeamEntity;
      @ApiProperty()
      thirdBank: ThirdBankEntity;
      @ApiProperty()
      third: ThirdEntity;
};



