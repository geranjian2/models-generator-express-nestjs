
  import RoleModel from '' 
  export interface TeamModel {
    id?:number
    roleId?:number
    uuid?:string
    email?:string
    emailValidationCode?:string
    emailValidation?:boolean
    indicative?:string
    phone?:string
    phoneValidationCode?:string
    phoneValidation?:boolean
    password?:string
    photo?:string
    firstName?:string
    lastName?:string
    step?:number
    status?:string
    phoneOtp?:string
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    role: RoleModel;
};



