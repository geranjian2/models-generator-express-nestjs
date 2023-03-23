
  export class CompanyModel {
    id?:number
    uuid?:string
    typeDocumentId?:number
    document?:string
    dv?:number
    businessName?:string
    countryId?:number
    departmentId?:number
    cityId?:number
    address?:string
    emailNotification?:string
    emailInvoice?:string
    indicativeContact?:string
    phoneContact?:string
    firstNameRl?:string
    lastNameRl?:string
    typeDocumentRlId?:number
    documentRl?:string
    indicativeRl?:string
    phoneRl?:string
    logo?:string
    acceptTerms?:boolean
    chamberCommerceImage?:string
    rut?:string
    commercialContract?:string
    status?:string
    emailRegister?:string
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    uploadedAt?:Date
    constructor(
      {
        id,
        uuid,
        typeDocumentId,
        document,
        dv,
        businessName,
        countryId,
        departmentId,
        cityId,
        address,
        emailNotification,
        emailInvoice,
        indicativeContact,
        phoneContact,
        firstNameRl,
        lastNameRl,
        typeDocumentRlId,
        documentRl,
        indicativeRl,
        phoneRl,
        logo,
        acceptTerms,
        chamberCommerceImage,
        rut,
        commercialContract,
        status,
        emailRegister,
        createdAt,
        updatedAt,
        deletedAt,
        uploadedAt,
      }:{
        id?:number,
        uuid?:string,
        typeDocumentId?:number,
        document?:string,
        dv?:number,
        businessName?:string,
        countryId?:number,
        departmentId?:number,
        cityId?:number,
        address?:string,
        emailNotification?:string,
        emailInvoice?:string,
        indicativeContact?:string,
        phoneContact?:string,
        firstNameRl?:string,
        lastNameRl?:string,
        typeDocumentRlId?:number,
        documentRl?:string,
        indicativeRl?:string,
        phoneRl?:string,
        logo?:string,
        acceptTerms?:boolean,
        chamberCommerceImage?:string,
        rut?:string,
        commercialContract?:string,
        status?:string,
        emailRegister?:string,
        createdAt?:Date,
        updatedAt?:Date,
        deletedAt?:Date,
        uploadedAt?:Date,
      }
    ){
        this.id=id
        this.uuid=uuid
        this.typeDocumentId=typeDocumentId
        this.document=document
        this.dv=dv
        this.businessName=businessName
        this.countryId=countryId
        this.departmentId=departmentId
        this.cityId=cityId
        this.address=address
        this.emailNotification=emailNotification
        this.emailInvoice=emailInvoice
        this.indicativeContact=indicativeContact
        this.phoneContact=phoneContact
        this.firstNameRl=firstNameRl
        this.lastNameRl=lastNameRl
        this.typeDocumentRlId=typeDocumentRlId
        this.documentRl=documentRl
        this.indicativeRl=indicativeRl
        this.phoneRl=phoneRl
        this.logo=logo
        this.acceptTerms=acceptTerms
        this.chamberCommerceImage=chamberCommerceImage
        this.rut=rut
        this.commercialContract=commercialContract
        this.status=status
        this.emailRegister=emailRegister
        this.createdAt=createdAt
        this.updatedAt=updatedAt
        this.deletedAt=deletedAt
        this.uploadedAt=uploadedAt
    }
};



