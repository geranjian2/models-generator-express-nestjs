
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { CompanyEntity } from ''
  import { PlanEntity } from ''
  import { CompanyPlanModel } from ''
  export class CompanyPlanDto {
    constructor(
      register: CompanyPlanModel
    ){
        this.id=register.id
        this.companyId=register.companyId
        this.planId=register.planId
        this.createdAt=register.createdAt
        this.updatedAt=register.updatedAt
        this.deletedAt=register.deletedAt
         this.company= register.CompanyEntity
         this.plan= register.PlanEntity
    }
      @ApiPropertyOptional()
      id?: number;
      @ApiProperty()
      companyId?: number;
      @ApiProperty()
      planId?: number;
      @ApiProperty()
      createdAt?: Date;
      @ApiProperty()
      updatedAt?: Date;
      @ApiProperty()
      deletedAt?: Date;
      @ApiProperty()
      company: CompanyEntity;
      @ApiProperty()
      plan: PlanEntity;
};



