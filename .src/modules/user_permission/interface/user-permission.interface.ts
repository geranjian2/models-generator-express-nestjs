
  import PermissionModel from '' 
  import UserModel from '' 
  export interface UserPermissionModel {
    id?:number
    userId?:number
    permissionId?:number
    permit?:boolean
    permission: PermissionModel;
    user: UserModel;
};



