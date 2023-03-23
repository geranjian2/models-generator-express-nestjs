
  import BillingModel from '' 
  export interface InvoicePaymentModel {
    id?:number
    billingId?:number
    paymentAt?:Date
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    billing: BillingModel;
};



