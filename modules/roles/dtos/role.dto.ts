
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { RoleModel } from ''
  export class RoleDto {
    constructor(
      register: RoleModel
    ){
        this.id=register.id
        this.name=register.name
        this.description=register.description
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
      createdAt?: Date;
      @ApiProperty()
      updatedAt?: Date;
      @ApiProperty()
      deletedAt?: Date;
};



