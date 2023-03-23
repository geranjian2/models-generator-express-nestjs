
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { PermissionEntity } from ''
  import { UserEntity } from ''
  import { UserPermissionModel } from ''
  export class UserPermissionDto {
    constructor(
      register: UserPermissionModel
    ){
        this.id=register.id
        this.userId=register.userId
        this.permissionId=register.permissionId
        this.permit=register.permit
         this.permission= register.PermissionEntity
         this.user= register.UserEntity
    }
      @ApiPropertyOptional()
      id?: number;
      @ApiProperty()
      userId?: number;
      @ApiProperty()
      permissionId?: number;
      @ApiProperty()
      permit?: boolean;
      @ApiProperty()
      permission: PermissionEntity;
      @ApiProperty()
      user: UserEntity;
};



