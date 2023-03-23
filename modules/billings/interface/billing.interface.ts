
  import CompanyModel from '' 
  export interface BillingModel {
    id?:number
    numberBilling?:string
    companyId?:number
    valuePlan?:string
    status?:string
    dateBilling?:Date
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    company: CompanyModel;
};



