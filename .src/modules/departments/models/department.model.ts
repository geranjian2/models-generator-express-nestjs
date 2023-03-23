
  export class DepartmentModel {
    id?:number
    code?:string
    name?:string
    countryId?:number
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    constructor(
      {
        id,
        code,
        name,
        countryId,
        createdAt,
        updatedAt,
        deletedAt,
      }:{
        id?:number,
        code?:string,
        name?:string,
        countryId?:number,
        createdAt?:Date,
        updatedAt?:Date,
        deletedAt?:Date,
      }
    ){
        this.id=id
        this.code=code
        this.name=name
        this.countryId=countryId
        this.createdAt=createdAt
        this.updatedAt=updatedAt
        this.deletedAt=deletedAt
    }
};



