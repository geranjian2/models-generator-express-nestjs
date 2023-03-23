
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { PermissionEntity } from ''
  import { TeamEntity } from ''
  import { TeamPermissionModel } from ''
  export class TeamPermissionDto {
    constructor(
      register: TeamPermissionModel
    ){
        this.id=register.id
        this.teamId=register.teamId
        this.permissionId=register.permissionId
        this.permit=register.permit
         this.permission= register.PermissionEntity
         this.team= register.TeamEntity
    }
      @ApiPropertyOptional()
      id?: number;
      @ApiProperty()
      teamId?: number;
      @ApiProperty()
      permissionId?: number;
      @ApiProperty()
      permit?: boolean;
      @ApiProperty()
      permission: PermissionEntity;
      @ApiProperty()
      team: TeamEntity;
};



