
  export class AccountTypeModel {
    id?:number
    code?:number
    name?:string
    status?:boolean
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    constructor(
      {
        id,
        code,
        name,
        status,
        createdAt,
        updatedAt,
        deletedAt,
      }:{
        id?:number,
        code?:number,
        name?:string,
        status?:boolean,
        createdAt?:Date,
        updatedAt?:Date,
        deletedAt?:Date,
      }
    ){
        this.id=id
        this.code=code
        this.name=name
        this.status=status
        this.createdAt=createdAt
        this.updatedAt=updatedAt
        this.deletedAt=deletedAt
    }
};



