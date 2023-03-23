
  export class UserModel {
    id?:number
    username?:string
    roleId?:number
    email?:string
    password?:string
    status?:string
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    constructor(
      {
        id,
        username,
        roleId,
        email,
        password,
        status,
        createdAt,
        updatedAt,
        deletedAt,
      }:{
        id?:number,
        username?:string,
        roleId?:number,
        email?:string,
        password?:string,
        status?:string,
        createdAt?:Date,
        updatedAt?:Date,
        deletedAt?:Date,
      }
    ){
        this.id=id
        this.username=username
        this.roleId=roleId
        this.email=email
        this.password=password
        this.status=status
        this.createdAt=createdAt
        this.updatedAt=updatedAt
        this.deletedAt=deletedAt
    }
};



