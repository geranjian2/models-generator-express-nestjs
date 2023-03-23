
  export class CompanyBankModel {
    id?:number
    companyId?:number
    bankId?:number
    bankAccount?:string
    accountTypeId?:number
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    constructor(
      {
        id,
        companyId,
        bankId,
        bankAccount,
        accountTypeId,
        createdAt,
        updatedAt,
        deletedAt,
      }:{
        id?:number,
        companyId?:number,
        bankId?:number,
        bankAccount?:string,
        accountTypeId?:number,
        createdAt?:Date,
        updatedAt?:Date,
        deletedAt?:Date,
      }
    ){
        this.id=id
        this.companyId=companyId
        this.bankId=bankId
        this.bankAccount=bankAccount
        this.accountTypeId=accountTypeId
        this.createdAt=createdAt
        this.updatedAt=updatedAt
        this.deletedAt=deletedAt
    }
};



