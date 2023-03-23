
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { BankModel } from ''
  export class BankDto {
    constructor(
      register: BankModel
    ){
        this.id=register.id
        this.name=register.name
        this.description=register.description
        this.code=register.code
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
      code?: string;
      @ApiProperty()
      status?: boolean;
      @ApiProperty()
      createdAt?: Date;
      @ApiProperty()
      updatedAt?: Date;
      @ApiProperty()
      deletedAt?: Date;
};



