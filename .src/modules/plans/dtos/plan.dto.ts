
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { PlanModel } from ''
  export class PlanDto {
    constructor(
      register: PlanModel
    ){
        this.id=register.id
        this.name=register.name
        this.description=register.description
        this.dispersionsNumber=register.dispersionsNumber
        this.value=register.value
        this.implementationFee=register.implementationFee
        this.status=register.status
        this.createdAt=register.createdAt
        this.updatedAt=register.updatedAt
        this.deletedAt=register.deletedAt
    }
      @ApiPropertyOptional()
      id?: number;
      @ApiProperty()
      name?: string;
      @ApiProperty()
      description?: string;
      @ApiProperty()
      dispersionsNumber?: number;
      @ApiProperty()
      value?: string;
      @ApiProperty()
      implementationFee?: string;
      @ApiProperty()
      status?: boolean;
      @ApiProperty()
      createdAt?: Date;
      @ApiProperty()
      updatedAt?: Date;
      @ApiProperty()
      deletedAt?: Date;
};



