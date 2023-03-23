
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { TypeDocumentModel } from ''
  export class TypeDocumentDto {
    constructor(
      register: TypeDocumentModel
    ){
        this.id=register.id
        this.code=register.code
        this.name=register.name
        this.description=register.description
        this.createdAt=register.createdAt
        this.updatedAt=register.updatedAt
        this.deletedAt=register.deletedAt
    }
      @ApiPropertyOptional()
      id?: number;
      @ApiProperty()
      code?: number;
      @ApiProperty()
      name?: string;
      @ApiProperty()
      description?: string;
      @ApiProperty()
      createdAt?: Date;
      @ApiProperty()
      updatedAt?: Date;
      @ApiProperty()
      deletedAt?: Date;
};



