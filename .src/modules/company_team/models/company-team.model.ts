
  export class CompanyTeamModel {
    id?:number
    companyId?:number
    teamId?:number
    constructor(
      {
        id,
        companyId,
        teamId,
      }:{
        id?:number,
        companyId?:number,
        teamId?:number,
      }
    ){
        this.id=id
        this.companyId=companyId
        this.teamId=teamId
    }
};



