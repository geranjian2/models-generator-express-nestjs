
  import CompanyModel from '' 
  import PlanModel from '' 
  export interface CompanyPlanModel {
    id?:number
    companyId?:number
    planId?:number
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    company: CompanyModel;
    plan: PlanModel;
};



