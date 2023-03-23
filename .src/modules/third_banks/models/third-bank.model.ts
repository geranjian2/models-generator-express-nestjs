
  export class ThirdBankModel {
    id?:number
    thirdId?:number
    bankId?:number
    bankAccount?:string
    accountTypeId?:number
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    constructor(
      {
        id,
        thirdId,
        bankId,
        bankAccount,
        accountTypeId,
        createdAt,
        updatedAt,
        deletedAt,
      }:{
        id?:number,
        thirdId?:number,
        bankId?:number,
        bankAccount?:string,
        accountTypeId?:number,
        createdAt?:Date,
        updatedAt?:Date,
        deletedAt?:Date,
      }
    ){
        this.id=id
        this.thirdId=thirdId
        this.bankId=bankId
        this.bankAccount=bankAccount
        this.accountTypeId=accountTypeId
        this.createdAt=createdAt
        this.updatedAt=updatedAt
        this.deletedAt=deletedAt
    }
};



