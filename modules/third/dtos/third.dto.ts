
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { ThirdCategoryEntity } from ''
  import { CompanyEntity } from ''
  import { TypeDocumentEntity } from ''
  import { ThirdModel } from ''
  export class ThirdDto {
    constructor(
      register: ThirdModel
    ){
        this.id=register.id
        this.uuid=register.uuid
        this.companyId=register.companyId
        this.businessName=register.businessName
        this.typeDocumentId=register.typeDocumentId
        this.document=register.document
        this.dv=register.dv
        this.emailNotification=register.emailNotification
        this.indicativeContact=register.indicativeContact
        this.phoneContact=register.phoneContact
        this.categoryId=register.categoryId
        this.thirdType=register.thirdType
        this.status=register.status
        this.createdAt=register.createdAt
        this.updatedAt=register.updatedAt
        this.deletedAt=register.deletedAt
         this.thirdCategory= register.ThirdCategoryEntity
         this.company= register.CompanyEntity
         this.typeDocument= register.TypeDocumentEntity
    }
      @ApiPropertyOptional()
      id?: number;
      @ApiProperty()
      uuid?: string;
      @ApiProperty()
      companyId?: number;
      @ApiProperty()
      businessName?: string;
      @ApiProperty()
      typeDocumentId?: number;
      @ApiProperty()
      document?: string;
      @ApiProperty()
      dv?: number;
      @ApiProperty()
      emailNotification?: string;
      @ApiProperty()
      indicativeContact?: string;
      @ApiProperty()
      phoneContact?: string;
      @ApiProperty()
      categoryId?: number;
      @ApiProperty()
      thirdType?: string;
      @ApiProperty()
      status?: string;
      @ApiProperty()
      createdAt?: Date;
      @ApiProperty()
      updatedAt?: Date;
      @ApiProperty()
      deletedAt?: Date;
      @ApiProperty()
      thirdCategory: ThirdCategoryEntity;
      @ApiProperty()
      company: CompanyEntity;
      @ApiProperty()
      typeDocument: TypeDocumentEntity;
};



