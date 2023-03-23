
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { RoleEntity } from ''
  import { TeamModel } from ''
  export class TeamDto {
    constructor(
      register: TeamModel
    ){
        this.id=register.id
        this.roleId=register.roleId
        this.uuid=register.uuid
        this.email=register.email
        this.emailValidationCode=register.emailValidationCode
        this.emailValidation=register.emailValidation
        this.indicative=register.indicative
        this.phone=register.phone
        this.phoneValidationCode=register.phoneValidationCode
        this.phoneValidation=register.phoneValidation
        this.password=register.password
        this.photo=register.photo
        this.firstName=register.firstName
        this.lastName=register.lastName
        this.step=register.step
        this.status=register.status
        this.phoneOtp=register.phoneOtp
        this.createdAt=register.createdAt
        this.updatedAt=register.updatedAt
        this.deletedAt=register.deletedAt
         this.role= register.RoleEntity
    }
      @ApiPropertyOptional()
      id?: number;
      @ApiProperty()
      roleId?: number;
      @ApiProperty()
      uuid?: string;
      @ApiProperty()
      email?: string;
      @ApiProperty()
      emailValidationCode?: string;
      @ApiProperty()
      emailValidation?: boolean;
      @ApiProperty()
      indicative?: string;
      @ApiProperty()
      phone?: string;
      @ApiProperty()
      phoneValidationCode?: string;
      @ApiProperty()
      phoneValidation?: boolean;
      @ApiProperty()
      password?: string;
      @ApiProperty()
      photo?: string;
      @ApiProperty()
      firstName?: string;
      @ApiProperty()
      lastName?: string;
      @ApiProperty()
      step?: number;
      @ApiProperty()
      status?: string;
      @ApiProperty()
      phoneOtp?: string;
      @ApiProperty()
      createdAt?: Date;
      @ApiProperty()
      updatedAt?: Date;
      @ApiProperty()
      deletedAt?: Date;
      @ApiProperty()
      role: RoleEntity;
};



