
  import CityModel from '' 
  import CountryModel from '' 
  import DepartmentModel from '' 
  import TypeDocumentModel from '' 
  export interface CompanyModel {
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
    city: CityModel;
    country: CountryModel;
    department: DepartmentModel;
    typeDocument: TypeDocumentModel;
};



