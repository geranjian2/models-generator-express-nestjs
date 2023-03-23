
  import AccountTypeModel from '' 
  import BankModel from '' 
  import ThirdModel from '' 
  export interface ThirdBankModel {
    id?:number
    thirdId?:number
    bankId?:number
    bankAccount?:string
    accountTypeId?:number
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    accountType: AccountTypeModel;
    bank: BankModel;
    third: ThirdModel;
};



