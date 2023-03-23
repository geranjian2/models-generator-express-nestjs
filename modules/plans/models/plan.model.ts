
  export class PlanModel {
    id?:number
    name?:string
    description?:string
    dispersionsNumber?:number
    value?:string
    implementationFee?:string
    status?:boolean
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    constructor(
      {
        id,
        name,
        description,
        dispersionsNumber,
        value,
        implementationFee,
        status,
        createdAt,
        updatedAt,
        deletedAt,
      }:{
        id?:number,
        name?:string,
        description?:string,
        dispersionsNumber?:number,
        value?:string,
        implementationFee?:string,
        status?:boolean,
        createdAt?:Date,
        updatedAt?:Date,
        deletedAt?:Date,
      }
    ){
        this.id=id
        this.name=name
        this.description=description
        this.dispersionsNumber=dispersionsNumber
        this.value=value
        this.implementationFee=implementationFee
        this.status=status
        this.createdAt=createdAt
        this.updatedAt=updatedAt
        this.deletedAt=deletedAt
    }
};



