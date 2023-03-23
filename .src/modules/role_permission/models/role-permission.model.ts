
  export class RolePermissionModel {
    roleId?:number
    permissionId?:number
    constructor(
      {
        roleId,
        permissionId,
      }:{
        roleId?:number,
        permissionId?:number,
      }
    ){
        this.roleId=roleId
        this.permissionId=permissionId
    }
};



