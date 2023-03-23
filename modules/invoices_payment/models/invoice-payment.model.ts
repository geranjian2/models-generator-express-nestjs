
  export class InvoicePaymentModel {
    id?:number
    billingId?:number
    paymentAt?:Date
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    constructor(
      {
        id,
        billingId,
        paymentAt,
        createdAt,
        updatedAt,
        deletedAt,
      }:{
        id?:number,
        billingId?:number,
        paymentAt?:Date,
        createdAt?:Date,
        updatedAt?:Date,
        deletedAt?:Date,
      }
    ){
        this.id=id
        this.billingId=billingId
        this.paymentAt=paymentAt
        this.createdAt=createdAt
        this.updatedAt=updatedAt
        this.deletedAt=deletedAt
    }
};



