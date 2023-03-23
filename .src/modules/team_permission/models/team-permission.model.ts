
  export class TeamPermissionModel {
    id?:number
    teamId?:number
    permissionId?:number
    permit?:boolean
    constructor(
      {
        id,
        teamId,
        permissionId,
        permit,
      }:{
        id?:number,
        teamId?:number,
        permissionId?:number,
        permit?:boolean,
      }
    ){
        this.id=id
        this.teamId=teamId
        this.permissionId=permissionId
        this.permit=permit
    }
};



