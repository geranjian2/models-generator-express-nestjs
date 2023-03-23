
  export class BillingModel {
    id?:number
    numberBilling?:string
    companyId?:number
    valuePlan?:string
    status?:string
    dateBilling?:Date
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    constructor(
      {
        id,
        numberBilling,
        companyId,
        valuePlan,
        status,
        dateBilling,
        createdAt,
        updatedAt,
        deletedAt,
      }:{
        id?:number,
        numberBilling?:string,
        companyId?:number,
        valuePlan?:string,
        status?:string,
        dateBilling?:Date,
        createdAt?:Date,
        updatedAt?:Date,
        deletedAt?:Date,
      }
    ){
        this.id=id
        this.numberBilling=numberBilling
        this.companyId=companyId
        this.valuePlan=valuePlan
        this.status=status
        this.dateBilling=dateBilling
        this.createdAt=createdAt
        this.updatedAt=updatedAt
        this.deletedAt=deletedAt
    }
};



