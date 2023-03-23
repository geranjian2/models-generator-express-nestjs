
  import TransactionModel from '' 
  import VoucherModel from '' 
  export interface TransactionDetailModel {
    id?:number
    uuid?:string
    transactionId?:number
    voucherId?:number
    document?:string
    invoiceNumber?:string
    invoiceExpiration?:Date
    value?:string
    status?:string
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    transaction: TransactionModel;
    voucher: VoucherModel;
};



