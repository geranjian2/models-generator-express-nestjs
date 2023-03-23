
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { PermissionModel } from ''
  export class PermissionDto {
    constructor(
      register: PermissionModel
    ){
        this.id=register.id
        this.name=register.name
        this.description=register.description
        this.createdAt=register.createdAt
        this.updatedAt=register.updatedAt
    }
      @ApiPropertyOptional()
      id?: number;
      @ApiProperty()
      name?: string;
      @ApiProperty()
      description?: string;
      @ApiProperty()
      createdAt?: Date;
      @ApiProperty()
      updatedAt?: Date;
};



