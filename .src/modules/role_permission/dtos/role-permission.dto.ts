
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { PermissionEntity } from ''
  import { RoleEntity } from ''
  import { RolePermissionModel } from ''
  export class RolePermissionDto {
    constructor(
      register: RolePermissionModel
    ){
        this.roleId=register.roleId
        this.permissionId=register.permissionId
         this.permission= register.PermissionEntity
         this.role= register.RoleEntity
    }
      @ApiProperty()
      roleId?: number;
      @ApiProperty()
      permissionId?: number;
      @ApiProperty()
      permission: PermissionEntity;
      @ApiProperty()
      role: RoleEntity;
};



