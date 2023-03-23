
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { CompanyEntity } from ''
  import { TeamEntity } from ''
  import { CompanyTeamModel } from ''
  export class CompanyTeamDto {
    constructor(
      register: CompanyTeamModel
    ){
        this.id=register.id
        this.companyId=register.companyId
        this.teamId=register.teamId
         this.company= register.CompanyEntity
         this.team= register.TeamEntity
    }
      @ApiPropertyOptional()
      id?: number;
      @ApiProperty()
      companyId?: number;
      @ApiProperty()
      teamId?: number;
      @ApiProperty()
      company: CompanyEntity;
      @ApiProperty()
      team: TeamEntity;
};



