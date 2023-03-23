
  import AccountTypeModel from '' 
  import BankModel from '' 
  import CompanyModel from '' 
  export interface CompanyBankModel {
    id?:number
    companyId?:number
    bankId?:number
    bankAccount?:string
    accountTypeId?:number
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    accountType: AccountTypeModel;
    bank: BankModel;
    company: CompanyModel;
};



