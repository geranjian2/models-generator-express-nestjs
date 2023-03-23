
  import PermissionModel from '' 
  import TeamModel from '' 
  export interface TeamPermissionModel {
    id?:number
    teamId?:number
    permissionId?:number
    permit?:boolean
    permission: PermissionModel;
    team: TeamModel;
};



