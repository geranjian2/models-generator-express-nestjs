
  export class TypeDocumentModel {
    id?:number
    code?:number
    name?:string
    description?:string
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    constructor(
      {
        id,
        code,
        name,
        description,
        createdAt,
        updatedAt,
        deletedAt,
      }:{
        id?:number,
        code?:number,
        name?:string,
        description?:string,
        createdAt?:Date,
        updatedAt?:Date,
        deletedAt?:Date,
      }
    ){
        this.id=id
        this.code=code
        this.name=name
        this.description=description
        this.createdAt=createdAt
        this.updatedAt=updatedAt
        this.deletedAt=deletedAt
    }
};



