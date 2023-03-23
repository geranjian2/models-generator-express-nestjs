
  export class CompanyPlanModel {
    id?:number
    companyId?:number
    planId?:number
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    constructor(
      {
        id,
        companyId,
        planId,
        createdAt,
        updatedAt,
        deletedAt,
      }:{
        id?:number,
        companyId?:number,
        planId?:number,
        createdAt?:Date,
        updatedAt?:Date,
        deletedAt?:Date,
      }
    ){
        this.id=id
        this.companyId=companyId
        this.planId=planId
        this.createdAt=createdAt
        this.updatedAt=updatedAt
        this.deletedAt=deletedAt
    }
};



