
  export class RoleModel {
    id?:number
    name?:string
    description?:string
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    constructor(
      {
        id,
        name,
        description,
        createdAt,
        updatedAt,
        deletedAt,
      }:{
        id?:number,
        name?:string,
        description?:string,
        createdAt?:Date,
        updatedAt?:Date,
        deletedAt?:Date,
      }
    ){
        this.id=id
        this.name=name
        this.description=description
        this.createdAt=createdAt
        this.updatedAt=updatedAt
        this.deletedAt=deletedAt
    }
};



