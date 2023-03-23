
  export class UserPermissionModel {
    id?:number
    userId?:number
    permissionId?:number
    permit?:boolean
    constructor(
      {
        id,
        userId,
        permissionId,
        permit,
      }:{
        id?:number,
        userId?:number,
        permissionId?:number,
        permit?:boolean,
      }
    ){
        this.id=id
        this.userId=userId
        this.permissionId=permissionId
        this.permit=permit
    }
};



