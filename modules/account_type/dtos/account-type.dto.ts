
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { AccountTypeModel } from ''
  export class AccountTypeDto {
    constructor(
      register: AccountTypeModel
    ){
        this.id=register.id
        this.code=register.code
        this.name=register.name
        this.status=register.status
        this.createdAt=register.createdAt
        this.updatedAt=register.updatedAt
        this.deletedAt=register.deletedAt
    }
      @ApiPropertyOptional()
      id?: number;
      @ApiProperty()
      code?: number;
      @ApiProperty()
      name?: string;
      @ApiProperty()
      status?: boolean;
      @ApiProperty()
      createdAt?: Date;
      @ApiProperty()
      updatedAt?: Date;
      @ApiProperty()
      deletedAt?: Date;
};



