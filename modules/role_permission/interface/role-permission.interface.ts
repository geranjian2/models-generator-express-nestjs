
  import PermissionModel from '' 
  import RoleModel from '' 
  export interface RolePermissionModel {
    roleId?:number
    permissionId?:number
    permission: PermissionModel;
    role: RoleModel;
};



