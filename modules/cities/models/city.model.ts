
  export class CityModel {
    id?:number
    code?:string
    name?:string
    departmentId?:number
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    constructor(
      {
        id,
        code,
        name,
        departmentId,
        createdAt,
        updatedAt,
        deletedAt,
      }:{
        id?:number,
        code?:string,
        name?:string,
        departmentId?:number,
        createdAt?:Date,
        updatedAt?:Date,
        deletedAt?:Date,
      }
    ){
        this.id=id
        this.code=code
        this.name=name
        this.departmentId=departmentId
        this.createdAt=createdAt
        this.updatedAt=updatedAt
        this.deletedAt=deletedAt
    }
};



