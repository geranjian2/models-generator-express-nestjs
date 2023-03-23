
  import CompanyModel from '' 
  import TeamModel from '' 
  export interface CompanyTeamModel {
    id?:number
    companyId?:number
    teamId?:number
    company: CompanyModel;
    team: TeamModel;
};



