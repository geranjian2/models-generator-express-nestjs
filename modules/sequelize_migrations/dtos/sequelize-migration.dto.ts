
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { SequelizeMigrationModel } from ''
  export class SequelizeMigrationDto {
    constructor(
      register: SequelizeMigrationModel
    ){
        this.name=register.name
    }
      @ApiProperty()
      name?: string;
};



