
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { SequelizeDatumModel } from ''
  export class SequelizeDatumDto {
    constructor(
      register: SequelizeDatumModel
    ){
        this.name=register.name
    }
      @ApiProperty()
      name?: string;
};



