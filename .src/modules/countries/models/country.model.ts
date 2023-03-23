
  export class CountryModel {
    id?:number
    indicative?:string
    name?:string
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    constructor(
      {
        id,
        indicative,
        name,
        createdAt,
        updatedAt,
        deletedAt,
      }:{
        id?:number,
        indicative?:string,
        name?:string,
        createdAt?:Date,
        updatedAt?:Date,
        deletedAt?:Date,
      }
    ){
        this.id=id
        this.indicative=indicative
        this.name=name
        this.createdAt=createdAt
        this.updatedAt=updatedAt
        this.deletedAt=deletedAt
    }
};



