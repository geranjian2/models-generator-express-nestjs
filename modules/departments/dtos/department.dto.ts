
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { CountryEntity } from ''
  import { DepartmentModel } from ''
  export class DepartmentDto {
    constructor(
      register: DepartmentModel
    ){
        this.id=register.id
        this.code=register.code
        this.name=register.name
        this.countryId=register.countryId
        this.createdAt=register.createdAt
        this.updatedAt=register.updatedAt
        this.deletedAt=register.deletedAt
         this.country= register.CountryEntity
    }
      @ApiPropertyOptional()
      id?: number;
      @ApiProperty()
      code?: string;
      @ApiProperty()
      name?: string;
      @ApiProperty()
      countryId?: number;
      @ApiProperty()
      createdAt?: Date;
      @ApiProperty()
      updatedAt?: Date;
      @ApiProperty()
      deletedAt?: Date;
      @ApiProperty()
      country: CountryEntity;
};



