
  export class ThirdCategoryModel {
    id?:number
    name?:string
    status?:boolean
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    constructor(
      {
        id,
        name,
        status,
        createdAt,
        updatedAt,
        deletedAt,
      }:{
        id?:number,
        name?:string,
        status?:boolean,
        createdAt?:Date,
        updatedAt?:Date,
        deletedAt?:Date,
      }
    ){
        this.id=id
        this.name=name
        this.status=status
        this.createdAt=createdAt
        this.updatedAt=updatedAt
        this.deletedAt=deletedAt
    }
};



