
  import RoleModel from '' 
  export interface UserModel {
    id?:number
    username?:string
    roleId?:number
    email?:string
    password?:string
    status?:string
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    role: RoleModel;
};



