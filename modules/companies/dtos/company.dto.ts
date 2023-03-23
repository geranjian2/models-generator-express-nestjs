
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { CityEntity } from ''
  import { CountryEntity } from ''
  import { DepartmentEntity } from ''
  import { TypeDocumentEntity } from ''
  import { CompanyModel } from ''
  export class CompanyDto {
    constructor(
      register: CompanyModel
    ){
        this.id=register.id
        this.uuid=register.uuid
        this.typeDocumentId=register.typeDocumentId
        this.document=register.document
        this.dv=register.dv
        this.businessName=register.businessName
        this.countryId=register.countryId
        this.departmentId=register.departmentId
        this.cityId=register.cityId
        this.address=register.address
        this.emailNotification=register.emailNotification
        this.emailInvoice=register.emailInvoice
        this.indicativeContact=register.indicativeContact
        this.phoneContact=register.phoneContact
        this.firstNameRl=register.firstNameRl
        this.lastNameRl=register.lastNameRl
        this.typeDocumentRlId=register.typeDocumentRlId
        this.documentRl=register.documentRl
        this.indicativeRl=register.indicativeRl
        this.phoneRl=register.phoneRl
        this.logo=register.logo
        this.acceptTerms=register.acceptTerms
        this.chamberCommerceImage=register.chamberCommerceImage
        this.rut=register.rut
        this.commercialContract=register.commercialContract
        this.status=register.status
        this.emailRegister=register.emailRegister
        this.createdAt=register.createdAt
        this.updatedAt=register.updatedAt
        this.deletedAt=register.deletedAt
        this.uploadedAt=register.uploadedAt
         this.city= register.CityEntity
         this.country= register.CountryEntity
         this.department= register.DepartmentEntity
         this.typeDocument= register.TypeDocumentEntity
    }
      @ApiPropertyOptional()
      id?: number;
      @ApiProperty()
      uuid?: string;
      @ApiProperty()
      typeDocumentId?: number;
      @ApiProperty()
      document?: string;
      @ApiProperty()
      dv?: number;
      @ApiProperty()
      businessName?: string;
      @ApiProperty()
      countryId?: number;
      @ApiProperty()
      departmentId?: number;
      @ApiProperty()
      cityId?: number;
      @ApiProperty()
      address?: string;
      @ApiProperty()
      emailNotification?: string;
      @ApiProperty()
      emailInvoice?: string;
      @ApiProperty()
      indicativeContact?: string;
      @ApiProperty()
      phoneContact?: string;
      @ApiProperty()
      firstNameRl?: string;
      @ApiProperty()
      lastNameRl?: string;
      @ApiProperty()
      typeDocumentRlId?: number;
      @ApiProperty()
      documentRl?: string;
      @ApiProperty()
      indicativeRl?: string;
      @ApiProperty()
      phoneRl?: string;
      @ApiProperty()
      logo?: string;
      @ApiProperty()
      acceptTerms?: boolean;
      @ApiProperty()
      chamberCommerceImage?: string;
      @ApiProperty()
      rut?: string;
      @ApiProperty()
      commercialContract?: string;
      @ApiProperty()
      status?: string;
      @ApiProperty()
      emailRegister?: string;
      @ApiProperty()
      createdAt?: Date;
      @ApiProperty()
      updatedAt?: Date;
      @ApiProperty()
      deletedAt?: Date;
      @ApiProperty()
      uploadedAt?: Date;
      @ApiProperty()
      city: CityEntity;
      @ApiProperty()
      country: CountryEntity;
      @ApiProperty()
      department: DepartmentEntity;
      @ApiProperty()
      typeDocument: TypeDocumentEntity;
};



