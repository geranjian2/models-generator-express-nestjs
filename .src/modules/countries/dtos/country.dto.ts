
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { CountryModel } from ''
  export class CountryDto {
    constructor(
      register: CountryModel
    ){
        this.id=register.id
        this.indicative=register.indicative
        this.name=register.name
        this.createdAt=register.createdAt
        this.updatedAt=register.updatedAt
        this.deletedAt=register.deletedAt
    }
      @ApiPropertyOptional()
      id?: number;
      @ApiProperty()
      indicative?: string;
      @ApiProperty()
      name?: string;
      @ApiProperty()
      createdAt?: Date;
      @ApiProperty()
      updatedAt?: Date;
      @ApiProperty()
      deletedAt?: Date;
};



