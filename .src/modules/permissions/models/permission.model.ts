
  export class PermissionModel {
    id?:number
    name?:string
    description?:string
    createdAt?:Date
    updatedAt?:Date
    constructor(
      {
        id,
        name,
        description,
        createdAt,
        updatedAt,
      }:{
        id?:number,
        name?:string,
        description?:string,
        createdAt?:Date,
        updatedAt?:Date,
      }
    ){
        this.id=id
        this.name=name
        this.description=description
        this.createdAt=createdAt
        this.updatedAt=updatedAt
    }
};



