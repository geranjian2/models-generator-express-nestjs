
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { RoleEntity } from ''
  import { UserModel } from ''
  export class UserDto {
    constructor(
      register: UserModel
    ){
        this.id=register.id
        this.username=register.username
        this.roleId=register.roleId
        this.email=register.email
        this.password=register.password
        this.status=register.status
        this.createdAt=register.createdAt
        this.updatedAt=register.updatedAt
        this.deletedAt=register.deletedAt
         this.role= register.RoleEntity
    }
      @ApiPropertyOptional()
      id?: number;
      @ApiProperty()
      username?: string;
      @ApiProperty()
      roleId?: number;
      @ApiProperty()
      email?: string;
      @ApiProperty()
      password?: string;
      @ApiProperty()
      status?: string;
      @ApiProperty()
      createdAt?: Date;
      @ApiProperty()
      updatedAt?: Date;
      @ApiProperty()
      deletedAt?: Date;
      @ApiProperty()
      role: RoleEntity;
};



