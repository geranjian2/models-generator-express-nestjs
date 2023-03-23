
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { DepartmentEntity } from ''
  import { CityModel } from ''
  export class CityDto {
    constructor(
      register: CityModel
    ){
        this.id=register.id
        this.code=register.code
        this.name=register.name
        this.departmentId=register.departmentId
        this.createdAt=register.createdAt
        this.updatedAt=register.updatedAt
        this.deletedAt=register.deletedAt
         this.department= register.DepartmentEntity
    }
      @ApiPropertyOptional()
      id?: number;
      @ApiProperty()
      code?: string;
      @ApiProperty()
      name?: string;
      @ApiProperty()
      departmentId?: number;
      @ApiProperty()
      createdAt?: Date;
      @ApiProperty()
      updatedAt?: Date;
      @ApiProperty()
      deletedAt?: Date;
      @ApiProperty()
      department: DepartmentEntity;
};



