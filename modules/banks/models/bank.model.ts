
  export class BankModel {
    id?:number
    name?:string
    description?:string
    code?:string
    status?:boolean
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    constructor(
      {
        id,
        name,
        description,
        code,
        status,
        createdAt,
        updatedAt,
        deletedAt,
      }:{
        id?:number,
        name?:string,
        description?:string,
        code?:string,
        status?:boolean,
        createdAt?:Date,
        updatedAt?:Date,
        deletedAt?:Date,
      }
    ){
        this.id=id
        this.name=name
        this.description=description
        this.code=code
        this.status=status
        this.createdAt=createdAt
        this.updatedAt=updatedAt
        this.deletedAt=deletedAt
    }
};



