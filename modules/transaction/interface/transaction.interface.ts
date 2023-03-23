
  import CompanyBankModel from '' 
  import CompanyModel from '' 
  import CompanyTeamModel from '' 
  import ThirdBankModel from '' 
  import ThirdModel from '' 
  export interface TransactionModel {
    id?:number
    uuid?:string
    reference?:string
    companyId?:number
    companyBankId?:number
    thirdId?:number
    thirdBankId?:number
    companyTeamId?:number
    quantity?:number
    averageValue?:string
    value?:string
    expirationDate?:Date
    observations?:string
    statusProcess?:string
    status?:string
    createdAt?:Date
    payedAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    groupPayingId?:any
    companyBank: CompanyBankModel;
    company: CompanyModel;
    companyTeam: CompanyTeamModel;
    thirdBank: ThirdBankModel;
    third: ThirdModel;
};



