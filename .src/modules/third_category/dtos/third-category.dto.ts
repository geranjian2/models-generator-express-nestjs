
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { ThirdCategoryModel } from ''
  export class ThirdCategoryDto {
    constructor(
      register: ThirdCategoryModel
    ){
        this.id=register.id
        this.name=register.name
        this.status=register.status
        this.createdAt=register.createdAt
        this.updatedAt=register.updatedAt
        this.deletedAt=register.deletedAt
    }
      @ApiPropertyOptional()
      id?: number;
      @ApiProperty()
      name?: string;
      @ApiProperty()
      status?: boolean;
      @ApiProperty()
      createdAt?: Date;
      @ApiProperty()
      updatedAt?: Date;
      @ApiProperty()
      deletedAt?: Date;
};



