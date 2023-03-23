
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { VoucherModel } from ''
  export class VoucherDto {
    constructor(
      register: VoucherModel
    ){
        this.id=register.id
        this.name=register.name
        this.description=register.description
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
      status?: boolean;
      @ApiProperty()
      createdAt?: Date;
      @ApiProperty()
      updatedAt?: Date;
      @ApiProperty()
      deletedAt?: Date;
};



