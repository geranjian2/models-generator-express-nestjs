
  import ThirdCategoryModel from '' 
  import CompanyModel from '' 
  import TypeDocumentModel from '' 
  export interface ThirdModel {
    id?:number
    uuid?:string
    companyId?:number
    businessName?:string
    typeDocumentId?:number
    document?:string
    dv?:number
    emailNotification?:string
    indicativeContact?:string
    phoneContact?:string
    categoryId?:number
    thirdType?:string
    status?:string
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    thirdCategory: ThirdCategoryModel;
    company: CompanyModel;
    typeDocument: TypeDocumentModel;
};



